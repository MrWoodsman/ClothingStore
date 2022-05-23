const size = document.getElementById('fsize')
const BoxSize = document.getElementById('ProductSize')

function OpenImg(object) {
    const styles = window.getComputedStyle(object);
    const image = styles.backgroundImage;

    // const ImgUrl = object.style.backgroundImage
    
    document.getElementById('dispalyer').classList.remove('hide')
    const change = image.substring(5)
    document.getElementById('ViewImg').src = change.slice(0,-2)
    // console.log(change.slice(0,-2))
}

function ExitImg() {
    document.getElementById('dispalyer').classList.add('hide')
}

// UPOADING IMAGES
const uploaded_images = "";

const image_input = document.getElementById("ImgUpload");

image_input.addEventListener("change", function() {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_images = reader.result;
    const ImgCard = document.createElement('div')
    ImgCard.classList.add('DisplayImg') 
    ImgCard.setAttribute('onclick','OpenImg(this)')
    ImgCard.style.backgroundImage = 'url('+uploaded_images+')'
    document.getElementById('ImgGrid').appendChild(ImgCard)
    // document.getElementById("display-image").style.backgroundImage = 'url('+uploaded_images+')';
  });
  reader.readAsDataURL(this.files[0]);
});



ImgUpload.addEventListener("change", function() {
    const reader = new FileReader()
    reader.addEventListener("load", () => {
        uploaded_images = reader.result
        // CREATE IMG CARD

    })
})

size.addEventListener('keypress', function (e) {
    console.log()
    if (e.key === 'Enter') {
        if (BoxSize.children.length < 4) {
            if(size.value != '') {
                const span = document.createElement('span')
                span.setAttribute('onclick','DelateSize(this)')
                span.textContent = size.value
                BoxSize.appendChild(span)
                size.value = ''
            }
        }
    }
});

function DelateSize(x) {
    x.classList.add('ToRemove')
    setTimeout(() => { 
        x.remove()
    }, 100);
}

function Clear() {
    var e = document.getElementById('ProductSize');
    var child = e.lastElementChild; 
    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }
}

function TestInputs() {
    // variables
    const Name = document.getElementById('fname')
    const TxtName = document.getElementById('fnametxt')
    const Description = document.getElementById('fdescription')
    const TxtDescription = document.getElementById('fdescriptiontxt')
    const Size = document.getElementById('ProductSize')
    const TxtSize = document.getElementById('ProductSizetxt')
    const Marka = document.getElementById('fmarka')
    const TxtMarka = document.getElementById('fmarkatxt')
    // Clear error class
    TxtName.classList.remove('error')
    TxtDescription.classList.remove('error')
    TxtSize.classList.remove('error')
    TxtMarka.classList.remove('error')
    // Add error class to empty inputs
    if(Name.value == '') {
        TxtName.classList.add('error')
    }
    if(Description.value == '') {
        TxtDescription.classList.add('error')
    }
    if(Size.children.length == 0) {
        TxtSize.classList.add('error')
    }
    if(Marka.value == '') {
        TxtMarka.classList.add('error')
    }
}