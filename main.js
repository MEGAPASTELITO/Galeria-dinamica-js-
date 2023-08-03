
const container = document.querySelector('.content');
const filter = document.querySelector('.filter');
const option = document.querySelectorAll('.select-option');

const CreateImgFilter =()=>{
    return `<div class="img-content">
        <img src="img/1.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/2.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/3.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/4.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/5.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/6.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/7.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/8.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/9.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/10.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/11.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/12.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/13.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/14.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/15.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/16.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/17.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/18.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/19.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/20.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/21.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/22.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/23.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/24.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/25.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/26.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/27.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/28.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/29.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/30.jpg" alt="img" class="img">
    </div>`
}

const CreateImgMontane =()=>{
    return `<div class="img-content">
        <img src="img/1.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/2.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/4.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/5.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/7.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/8.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/9.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/10.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/12.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/13.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/14.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/15.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/16.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/17.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/18.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/20.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/21.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/22.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/23.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/24.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/25.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/26.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/27.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/28.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/29.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/30.jpg" alt="img" class="img">
    </div>`
}

const CreateImgForest =()=>{
    return `<div class="img-content">
        <img src="img/1.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/2.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/3.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/4.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/5.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/6.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/7.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/9.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/12.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/18.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/19.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/21.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/24.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/26.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/27.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/29.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/30.jpg" alt="img" class="img">
    </div>`
}

const CreateImgRoad =()=>{
    return `<div class="img-content">
        <img src="img/13.jpg" alt="img" class="img">
    </div>
    <div class="img-content">
        <img src="img/14.jpg" alt="img" class="img">
    </div>`
}

filter.addEventListener('change',()=>{
    let selectedOption = option[filter.selectedIndex];
    if(selectedOption.text === 'filter'){
        container.innerHTML = CreateImgFilter();
    }else if (selectedOption.text === 'playa'){
        container.innerHTML = '';
    }
    else if (selectedOption.text === 'montane'){
        container.innerHTML = CreateImgMontane();
    }
    else if (selectedOption.text === 'forest'){
        container.innerHTML = CreateImgForest();
    }
    else if (selectedOption.text === 'road'){
        container.innerHTML = CreateImgRoad();
    }
})

