const cloudinary = require('cloudinary').v2;

// 1. Configure Cloudinary
cloudinary.config({
  cloud_name: 'dhdheqhsx',
  api_key: '734676463717694',
  api_secret: 'vHqgONsGbduNNBkr_kBnjZBnoTw',
});

async function run() {
  try {
    // 2. Upload an image
    console.log('Uploading sample image...');
    const uploadResult = await cloudinary.uploader.upload(
      'https://res.cloudinary.com/demo/image/upload/sample.jpg',
      { public_id: 'test_sample_image' }
    );
    console.log('--- Upload Success ---');
    console.log('Public ID:', uploadResult.public_id);
    console.log('Secure URL:', uploadResult.secure_url);
    console.log('');

    // 3. Get image details
    console.log('--- Image Metadata ---');
    const details = await cloudinary.api.resource(uploadResult.public_id);
    console.log('Width:', details.width);
    console.log('Height:', details.height);
    console.log('Format:', details.format);
    console.log('File size (bytes):', details.bytes);
    console.log('');

    // 4. Transform the image
    // f_auto: Automatically selects the most optimal image format (e.g. WebP/AVIF instead of JPG) based on the requesting browser.
    // q_auto: Automatically optimizes the image quality to reduce file size without any visible degradation.
    const transformedUrl = cloudinary.url(uploadResult.public_id, {
      fetch_format: 'auto',
      quality: 'auto'
    });

    console.log('--- Transformation Success ---');
    console.log('Done! Click link below to see optimized version of the image. Check the size and the format.');
    console.log(transformedUrl);

  } catch (error) {
    console.error('Error:', error);
  }
}

run();
