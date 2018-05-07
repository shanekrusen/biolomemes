document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('upload').onchange = function() {
    var input = document.getElementById('upload');

    if (input.files.length > 0) {

    }
  }

  document.getElementById('convert').onclick = function() {
    var input = document.getElementById('upload').files;
    if (input.length > 0) {
      var file = input[0];
      var reader = new FileReader();
      var dnaMap = {
        "00":"G",
        "11":"A",
        "01":"T",
        "10":"C"
      }

      reader.onload = function() {
        var imgSrc = reader.result;
        convert(imgSrc);
      }

      reader.readAsBinaryString(file);
      
      function convert(data) {
        var result = '';
        for (let i = 0; i < data.length; i++) {
          result += data.charCodeAt(i).toString(2).padStart(8, 0);
        }
        bio(result)
      }

      function bio(data) {
        var array = [];
        var result = '';
        for (let i = 0; i < data.length; i += 2) {
          array.push(data.substring(i, i + 2));
        }
        
        for (let i = 0; i < array.length; i++) {
          result += dnaMap[array[i]];
        }
        document.getElementById('output').value = result;
      }
    } else {
      
    }
  }
});
