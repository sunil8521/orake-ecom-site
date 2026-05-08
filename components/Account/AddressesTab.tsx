"use client";
import { useState } from "react";
import { MapPin, X, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { addAddress, updateAddress, deleteAddress, setDefaultAddress } from "@/actions/address";
import { titleFont, textFont } from "@/lib/fonts";


const addressSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  street: z.string().min(5, "Street address is required"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  postalCode: z.string().min(5, "Postal code is required"),
  country: z.string().min(2, "Country is required"),
});

type AddressFormValues = z.infer<typeof addressSchema>;

interface Address extends AddressFormValues {
  _id: string;
  isDefault: boolean;
}

export default function AddressesTab({ initialAddresses = [] }: { initialAddresses?: Address[] }) {
  // ✅ initialAddresses comes from server — no loading state, instant render
  const [addresses, setAddresses] = useState<Address[]>(initialAddresses);
  const [submitting, setSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const form = useForm<AddressFormValues>({
    resolver: zodResolver(addressSchema),
    defaultValues: { fullName: "", phone: "", street: "", city: "", state: "", postalCode: "", country: "India" }
  });


  const handleSetDefault = async (id: string) => {
    try {
      const res = await setDefaultAddress(id);
      if (res.success) {
        setAddresses(prev => prev.map(addr => ({ ...addr, isDefault: addr._id === id })));
        toast.success("Default address updated");
      }
    } catch {
      toast.error("Failed to update default");
    }
  };

  const handleRemove = async (id: string) => {
    try {
      const res = await deleteAddress(id);
      if (res.success) {
        setAddresses(prev => prev.filter(addr => addr._id !== id));
        toast.success("Address removed");
      }
    } catch {
      toast.error("Failed to remove address");
    }
  };

  const openAdd = () => {
    setEditingId(null);
    form.reset({ fullName: "", phone: "", street: "", city: "", state: "", postalCode: "", country: "India" });
    setIsModalOpen(true);
  };

  const openEdit = (addr: Address) => {
    setEditingId(addr._id);
    form.reset({
      fullName: addr.fullName,
      phone: addr.phone,
      street: addr.street,
      city: addr.city,
      state: addr.state,
      postalCode: addr.postalCode,
      country: addr.country,
    });
    setIsModalOpen(true);
  };

  const onSubmit = async (data: AddressFormValues) => {
    setSubmitting(true);
    try {
      if (editingId) {
        const res = await updateAddress(editingId, data);
        if (res.success) {
          setAddresses(prev => prev.map(addr => addr._id === editingId ? res.address : addr));
          toast.success("Address updated");
        } else {
          toast.error(res.error || "Failed to update");
        }
      } else {
        const res = await addAddress({ ...data, isDefault: addresses.length === 0 });
        if (res.success) {
          setAddresses(prev => [...prev, res.address]);
          toast.success("Address added");
        } else {
          toast.error(res.error || "Failed to add");
        }
      }
      setIsModalOpen(false);
    } catch {
      toast.error("Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };



  return (
    <>
      <div className="bg-white border border-gray-200 rounded-[2rem] p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
          <h3 className={`${titleFont.className} text-2xl uppercase tracking-wide text-[#15161b]`}>
            Saved Addresses
          </h3>
          <button onClick={openAdd} className={`${textFont.className} flex items-center justify-center px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all bg-[#15161b] hover:bg-[#c25b5e] text-white`}>
            + Add New Address
          </button>
        </div>

        {addresses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {addresses.map((addr) => (
              <div key={addr._id} className={`relative p-6 rounded-2xl border-2 transition-all ${addr.isDefault ? 'border-[#c25b5e] bg-red-50/30' : 'border-gray-100 bg-gray-50'}`}>
                {addr.isDefault && (
                  <span className={`${textFont.className} absolute top-4 right-4 bg-[#c25b5e] text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full`}>
                    Default
                  </span>
                )}
                {!addr.isDefault && (
                  <button onClick={() => handleSetDefault(addr._id)} className={`${textFont.className} absolute top-4 right-4 text-[#c25b5e] text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full hover:bg-red-50 transition-colors`}>
                    Set as Default
                  </button>
                )}
                <h4 className={`${textFont.className} text-base font-bold text-[#15161b] mb-1`}>{addr.fullName}</h4>
                <p className={`${textFont.className} text-sm text-gray-500 mb-3`}>{addr.phone}</p>
                
                <p className={`${textFont.className} text-sm text-gray-600 leading-relaxed mb-4`}>
                  {addr.street}<br/>
                  {addr.city}, {addr.state} {addr.postalCode}<br/>
                  {addr.country}
                </p>

                <div className="flex items-center gap-3 border-t border-gray-200/60 pt-4">
                  <button onClick={() => openEdit(addr)} className={`${textFont.className} text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-[#c25b5e] transition-colors`}>Edit</button>
                  <span className="text-gray-300">•</span>
                  <button onClick={() => handleRemove(addr._id)} className={`${textFont.className} text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-red-500 transition-colors`}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <MapPin size={48} className="mx-auto text-gray-200 mb-4" />
            <p className={`${textFont.className} text-gray-400 text-sm uppercase tracking-wider`}>No saved addresses</p>
           
          </div>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setIsModalOpen(false)}>
          <div className="bg-white rounded-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className={`${titleFont.className} text-2xl uppercase tracking-wide text-[#15161b]`}>
                {editingId ? "Edit Address" : "Add New Address"}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400 hover:text-[#15161b] transition-colors">
                <X size={16} />
              </button>
            </div>
            
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`${textFont.className} block text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-2`}>Full Name</label>
                  <input {...form.register("fullName")} className={`${textFont.className} w-full border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-[#15161b] focus:border-[#c25b5e] focus:bg-white focus:outline-none transition-all rounded-xl`} />
                  {form.formState.errors.fullName && <p className="text-red-500 text-xs mt-1">{form.formState.errors.fullName.message}</p>}
                </div>
                <div>
                  <label className={`${textFont.className} block text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-2`}>Phone Number</label>
                  <input {...form.register("phone")} className={`${textFont.className} w-full border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-[#15161b] focus:border-[#c25b5e] focus:bg-white focus:outline-none transition-all rounded-xl`} />
                  {form.formState.errors.phone && <p className="text-red-500 text-xs mt-1">{form.formState.errors.phone.message}</p>}
                </div>
              </div>
              
              <div>
                <label className={`${textFont.className} block text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-2`}>Street Address</label>
                <input {...form.register("street")} className={`${textFont.className} w-full border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-[#15161b] focus:border-[#c25b5e] focus:bg-white focus:outline-none transition-all rounded-xl`} />
                {form.formState.errors.street && <p className="text-red-500 text-xs mt-1">{form.formState.errors.street.message}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`${textFont.className} block text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-2`}>City</label>
                  <input {...form.register("city")} className={`${textFont.className} w-full border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-[#15161b] focus:border-[#c25b5e] focus:bg-white focus:outline-none transition-all rounded-xl`} />
                  {form.formState.errors.city && <p className="text-red-500 text-xs mt-1">{form.formState.errors.city.message}</p>}
                </div>
                <div>
                  <label className={`${textFont.className} block text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-2`}>State</label>
                  <input {...form.register("state")} className={`${textFont.className} w-full border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-[#15161b] focus:border-[#c25b5e] focus:bg-white focus:outline-none transition-all rounded-xl`} />
                  {form.formState.errors.state && <p className="text-red-500 text-xs mt-1">{form.formState.errors.state.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`${textFont.className} block text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-2`}>Postal Code</label>
                  <input {...form.register("postalCode")} className={`${textFont.className} w-full border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-[#15161b] focus:border-[#c25b5e] focus:bg-white focus:outline-none transition-all rounded-xl`} />
                  {form.formState.errors.postalCode && <p className="text-red-500 text-xs mt-1">{form.formState.errors.postalCode.message}</p>}
                </div>
                <div>
                  <label className={`${textFont.className} block text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-2`}>Country</label>
                  <input {...form.register("country")} className={`${textFont.className} w-full border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-[#15161b] focus:border-[#c25b5e] focus:bg-white focus:outline-none transition-all rounded-xl`} />
                  {form.formState.errors.country && <p className="text-red-500 text-xs mt-1">{form.formState.errors.country.message}</p>}
                </div>
              </div>

              <div className="pt-6">
                <button type="submit" disabled={submitting} className={`${textFont.className} w-full bg-[#15161b] text-white py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-[#c25b5e] transition-colors shadow-lg shadow-[#15161b]/20 disabled:opacity-50 flex items-center justify-center gap-2`}>
                  {submitting && <Loader2 size={14} className="animate-spin" />}
                  Save Address
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
