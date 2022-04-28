$(document).ready(function () {

  // callback function
  function storeResults(result, file_name) {
    f = new hdf5.File(result, file_name); // creat h5 file from the array buffer
    let array = f.get('main').value // adopt the key 
    // jsfive can only return 1D arrays from a read operation -> use numjs to reconstruct the 3D volume
    array = nj.array(array).reshape(20, 1400, 700) // adapt the z,y,x value to the shape of your volume
    // slicing a 124x124 image from the volume
    // use reshape to drop the channel dimension 1x124x124 -> 124x124
    let img = array.slice([10,11],[0,124],[0,124]).reshape(124,124)
    // convert to image and save add to canvas
    let resized = nj.images.resize(img, 124,124)
    let $original = document.getElementById('original');
    $original.width = 124; $original.height = 124;
    nj.images.save(resized, $original);
    console.log("done")
  }

  $("#datafile").change(async function loadData() {
      const reader = new FileReader(); 
      let file = $("#datafile")[0].files[0] // retrieve the file
      let file_name = file.name 
      reader.readAsArrayBuffer($("#datafile")[0].files[0]); // read the file as array buffer
      reader.onload = () => storeResults(reader.result, file_name); // callback when done loading
  })

})
