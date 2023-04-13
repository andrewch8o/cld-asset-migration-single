const cloudinary = require('cloudinary').v2;

/* 
In this specific example we are using:
 - `use_filename: true` to instruct Cloudinary to use the file name of the asset being uploaded to produce asset public_id on upload
	- `iss050e066094~orig` ⇒ `iss050e066094_orig` 
 - `unique_filename: false` to prevent Cloudinary from adding unique suffix to the public_id of the uploaded asset
 	- This way public_id matches the original asset’s file name as closely as possible 
 - `asset_type: auto` to let the Cloudinary back-end determine the type of the asset ( `image`, `video` or `raw` ) on upload
 	- This way we do not need to maintain logic in the migration routine to determine type for each asset before upload 

 Note that in public_id cloudinary replaced `~` with `_`. More details on this behavior here:
 https://support.cloudinary.com/hc/en-us/articles/115001317409--Legal-naming-conventions 
 */

cloudinary.uploader.upload('https://images-assets.nasa.gov/image/iss050e066094/iss050e066094~orig.jpg', {
	use_filename: true,
	unique_filename: false,
	context: { alt: 'ISS: Expedition 50 astronauts captured this night image of sparkling cities' },
	resource_type: 'auto'
}).then(response => console.log(response))
  .catch(err => console.error(err));


