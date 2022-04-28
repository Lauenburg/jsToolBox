$(document).ready(function () {

    $("#datafile").change(function loadData() {
        var file_input = $("#datafile")[0];
        var file = file_input.files[0]; // only one file allowed
        let datafilename = file.name;
        let reader = new FileReader();
        reader.onloadend = function(evt) { 
          let barr = evt.target.result;
          var f = new hdf5.File(barr, datafilename);
          var array = nj.array(f.get('main').value).reshape(20, 1400, 700)
          console.log(array)
          var img = array.slice([10,11],[0,124],[0,124]).reshape(124,124)
          var resized = nj.images.resize(img, 124,124)
          var $original = document.getElementById('original');
          $original.width = 124; $original.height = 124;
          nj.images.save(resized, $original);
        }
        reader.readAsArrayBuffer(file);
        file_input.value = "";
    
    })

})
