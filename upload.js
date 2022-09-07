
const input = document.querySelector(".image_uploads");
const preview = document.querySelector(".preview");
let filearry=[];


// input.style.opacity = 0;
input.style.opacity = 0;

input.addEventListener("change", updateImageDisplay);


function updateImageDisplay() {
  while (preview.firstChild) {
    preview.removeChild(preview.firstChild);
  }

  const curFiles = input.files;
  if (curFiles.length === 0) {
    const para = document.createElement("p");
    para.textContent = "No files currently selected for upload";
    preview.appendChild(para);
  } else {
    const list = document.createElement("ol");
    preview.appendChild(list);

    for (const file of curFiles) {
      const listItem = document.createElement("li");
      const para = document.createElement("p");
      // const x = document.createElement('img')
      // x.style.width = '25px'
      // x.src = "./img/delete.svg";
      // filearry.push(curFiles)
      // x.addEventListener ('click',function(){
      //   deletex(file)
      //   console.log(file);

      // })
      //  ;

     
      listItem.style.background="#FFFFFF";  
      listItem.style.padding="3px";  
      listItem.style.width="90%";  
      listItem.style.display="flex"
      listItem.style.borderRadius="4px";
      listItem.style.justifyContent = "space-between"
      // listItem.style.margin="auto"; 
      listItem.style.margin= "0px 0px 10px 0 " 
      listItem.style.listStyle="none";  
     
      // x.style.cursor='pointer'

      if (validFileType(file)) {
        para.textContent = `File name :   ${file.name}, file size ${returnFileSize(
          file.size
        )}.`;

        // const image = document.createElement("img");
        // image.src = URL.createObjectURL(file);

        // listItem.appendChild(image);
        listItem.appendChild(para);
        // listItem.appendChild(x)
        // x.src
        // x.appendChild(`.img/delete.svg`)
      } else {
        para.textContent = `File name ${file.name}: Not a valid file type. Update your selection.`;
        listItem.appendChild(para);
      }

      list.appendChild(listItem);
    }
    console.log(filearry);

    // deletex(curFiles[0])
    console.log(curFiles);
  }
}

// function deletex(y){
//   filearry.splice(y,1)
//   console.log(filearry);
  
// }

// https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types
const fileTypes = [
  "image/apng",
  "image/bmp",
  "image/gif",
  "image/jpeg",
  "image/pjpeg",
  "image/png",
  "image/svg+xml",
  "image/tiff",
  "image/webp",
  "image/x-icon",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
"application/pdf"
];

function validFileType(file) {
  return fileTypes.includes(file.type);
}




function returnFileSize(number) {
  if (number < 1024) {
    return `${number} bytes`;
  } else if (number >= 1024 && number < 1048576) {
    return `${(number / 1024).toFixed(1)} KB`;
  } else if (number >= 1048576) {
    return `${(number / 1048576).toFixed(1)} MB`;
  }
}

function dropHandler(ev) {
  console.log("File(s) dropped");

  // Prevent default behavior (Prevent file from being opened)
  ev.preventDefault();

  if (ev.dataTransfer.items) {
    // Use DataTransferItemList interface to access the file(s)
    [...ev.dataTransfer.items].forEach((item, i) => {
      // If dropped items aren't files, reject them
      if (item.kind === "file") {
        const file = item.getAsFile();
        console.log(`… file[${i}].name = ${file.name}`);
        preview.innerHTML=`file uploads : ${file.name}`
      }
    });
  } else {
    // Use DataTransfer interface to access the file(s)
    [...ev.dataTransfer.files].forEach((file, i) => {
      console.log(`… file[${i}].name = ${file.name}`);
    });
  }
}
function dragOverHandler(ev) {
  console.log("File(s) in drop zone");

  // Prevent default behavior (Prevent file from being opened)
  ev.preventDefault();
}
