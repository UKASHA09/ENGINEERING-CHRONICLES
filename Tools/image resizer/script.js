const dropArea = document.querySelector('.drop-area');
const dropText = document.getElementById('drop-text');
const uploadInput = document.getElementById('upload');
const canvas = document.getElementById('canvas');
const outputImage = document.getElementById('output');
const widthInput = document.getElementById('width-input');
const heightInput = document.getElementById('height-input');
const resizeOptions = document.querySelectorAll('input[name="resize"]');
const downloadBtn = document.getElementById('download-btn');

function handleFile(file) {
  const reader = new FileReader();

  reader.onload = function (e) {
    const img = new Image();
    img.onload = function () {
      const resizeOption = document.querySelector('input[name="resize"]:checked').value;
      let width, height;

      if (resizeOption === 'custom') {
        width = parseInt(widthInput.value);
        height = parseInt(heightInput.value);
      } else {
        const resizePercentage = parseInt(resizeOption);
        width = img.width * (resizePercentage / 100);
        height = img.height * (resizePercentage / 100);
      }

      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, width, height);

      outputImage.src = canvas.toDataURL('image/jpeg');

      outputImage.classList.add('active');
      canvas.classList.add('active');
      downloadBtn.href = outputImage.src;
      downloadBtn.download = 'resized_image.jpg';

      dropText.style.display = 'none';
      downloadBtn.disabled = false;
    };

    img.src = e.target.result;
  };

  reader.readAsDataURL(file);
}

dropArea.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropArea.classList.add('drag-over');
});

dropArea.addEventListener('dragleave', () => {
  dropArea.classList.remove('drag-over');
});

dropArea.addEventListener('drop', (e) => {
  e.preventDefault();
  dropArea.classList.remove('drag-over');

  const file = e.dataTransfer.files[0];
  handleFile(file);
});

dropArea.addEventListener('click', () => {
  uploadInput.click();
});

uploadInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  handleFile(file);
});

resizeOptions.forEach(function (option) {
  option.addEventListener('change', function () {
    if (option.value === 'custom') {
      widthInput.disabled = false;
      heightInput.disabled = false;
    } else {
      widthInput.disabled = true;
      heightInput.disabled = true;
    }

    handleFile(uploadInput.files[0]);
  });
});

widthInput.addEventListener('input', function () {
  handleFile(uploadInput.files[0]);
});

heightInput.addEventListener('input', function () {
  handleFile(uploadInput.files[0]);
});

downloadBtn.addEventListener('click', () => {
  // Do nothing here, the href and download attributes are already set correctly
});




