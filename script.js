const hamburger = document.querySelector(".hamburger")
const backdrop = document.querySelector('.backdrop')
hamburger.onclick = function() {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active")
    backdrop.classList.toggle('show_backdrop')
    hamburger.style.zIndex = '30'

}


const dataAlt = [

    {
        name: 'Milane',
        img: 'https://i.pinimg.com/originals/94/34/d1/9434d125f0902bdfd846deaf30945f80.jpg',
        price: 1,
        category: 'Italy'
    },
    {
        name: 'Venice',
        img: 'https://sportishka.com/uploads/posts/2022-04/1650540469_31-sportishka-com-p-gorod-venetsiya-krasivo-foto-32.jpg',
        price: 1,
        category: 'Italy'
    },
    {
        name: 'Rim',
        img: 'https://sportishka.com/uploads/posts/2022-04/1650540469_31-sportishka-com-p-gorod-venetsiya-krasivo-foto-32.jpg',
        price: 1,
        category: 'Italy'
    },
    {
        name: 'Hawai',
        img: 'https://tourscanner.com/blog/wp-content/uploads/2022/08/Circle-Island-Oahu-Hawaii.jpg',
        price: 2,
        category: 'Usa'
    },
    {
        name: 'New-York',
        img: 'https://cdn.worldota.net/t/1024x768/content/zz/85/ad852513a4d1abf5f32d3bcb67ac0e6469127582.jpeg',
        price: 2,
        category: 'Usa'
    },
    {
        name: 'Colifornia',
        img: 'https://u.9111s.ru/uploads/202212/23/facdf36cbbc94efbba4251e11dc78ccd.jpg',
        price: 2,
        category: 'Usa'
    },
    {
        name: 'Bishkek',
        img: 'https://sputnik.kg/img/103227/18/1032271888_0:593:1079:1272_1920x0_80_0_0_73617b3cd8fd16e15ba9b3967c718d9c.jpg',
        price: 1,
        category: 'KGZ'
    },
    {
        name: 'Osh',
        img: 'https://www.vesveter.ru/images/kirgustan/suleyman_gora_muzey_1.jpg',
        price: 1,
        category: 'KGZ'
    },
    {
        name: 'Ysyk-Kul',
        img: 'https://i.ytimg.com/vi/lN_2LlHLvGE/maxresdefault.jpg',
        price: 1,
        category: 'KGZ'
    },
]

///////////////////////////////////////////////////////////////////////////
// отрисовка всей страницы

const outputt = document.querySelector('.outputt')
// Создается ссылка на элемент с классом "output", который является
// контейнером для отображения списка товаров.



// функция categoriesRender, принимает data в качестве аргумента и отображает
// элементы списка. Для каждого элемента данных создаются соответствующие элементы HTML
const categoriesRender = (data) => {
    outputt.innerHTML = ''
    data.forEach(el => {
        const wrap = document.createElement('div')
        const image = document.createElement('img')
        const name = document.createElement('p')
        const obr = document.createElement('div')
        const price = document.createElement('p')
        const show = document.createElement('h4')
        const category = document.createElement('p')

        category.classList = 'catbtn'
        wrap.classList = 'wrap'
        obr.classList = 'obr'
         

        show.textContent = 'info'
        image.src = el.img
        name.textContent = el.name
        
        show.addEventListener('click',()=>{
            const isVisible = category.classList.toggle('show-info');
            if (isVisible) {
              price.textContent = el.price;
              category.textContent = el.category;
            } else {
              price.textContent = '';
              category.textContent = '';
            }
        });


        obr.append(price,category)
        wrap.append(image, name, show, obr)
        outputt.append(wrap)

    })

}

categoriesRender(dataAlt)
// Вызывается функция categoriesRender с аргументом dataAlt, которая содержит данные о товарах.

///////////////////////////////////////////////////////////////////////////////////////////
// категории

const categoryChoise = [ 'all', 'Italy', 'Usa', 'KGZ']
// Создаем массив categoryChoise, который содержит список категорий, включая "all", "burgers", "pizzas" и "drinks"



const onButtonClickRenderItems = () => {
    const categoriesWrap = document.querySelector('.categories__choise')

    categoryChoise.forEach(el => {
        const option = document.createElement('option')

        option.textContent = el
        option.value = el
        option.classList = 'categoryBtn'

        categoriesWrap.addEventListener('change', () => {
            // const allButtons = document.querySelectorAll('.categoryBtn');
            // allButtons.forEach(btn => {
            //     btn.classList.remove('active');
            // });
            // button.classList.add('active');

            const selectedCategory = categoriesWrap.value
            if(selectedCategory === 'all') {
                categoriesRender(dataAlt)
                title.textContent = el
            } else {
                const result = dataAlt.filter(item => {
                    return item.category === selectedCategory  
                })
                categoriesRender(result)
                title.textContent = el
            }
        })
        categoriesWrap.append(option)
    })

}

onButtonClickRenderItems()


////////////////////////////////////////////////////////////////////////////////
//  активная кнопка - закршивание по цвету


const activeButton = () => {
    const categoryBtn = document.querySelectorAll('.categoryBtn')
    // categoryBtn[0].classList.add('active')

    categoryBtn.forEach((el, parentIndex) => {
        el.addEventListener('click', () => {
            categoryBtn.forEach((item, childIndex) => {
                console.log(`parentIndex - ${parentIndex}, childIndex - ${childIndex}`);
                if(parentIndex === childIndex) {
                    item.classList.add('active')
                } else if (parentIndex !== childIndex) {
                    item.classList.remove('active')
                }
            })
        })
    })

}




///////////////////////////////////////////////////////////////////////
// динамический поиск в form

const formsearch = document.querySelector('#form_search')
const search = document.querySelector('.search')
const clear = document.querySelector('.clear')

search.addEventListener('input',(e)=>{
    e.preventDefault();

    const searchTerm = search.value.trim().toLowerCase();
    // searchTerm значение в инпуте, которое вводит user

    const searchResults = dataAlt.filter((el) =>
        // el - каждое слово
        el.name.toLowerCase().includes(searchTerm)
    );
    // search.value = ''
    categoriesRender(searchResults);
})


// formsearch.addEventListener('submit', (e) => {

// });





  ///////
clear.addEventListener('click', () => {
    search.value = ''
})




var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  

// тг бот

    const message = document.querySelector('#inputMessage')
const number = document.querySelector('#inputNumber')
const telegram_form = document.querySelector('#telegram__apply')
const check = document.querySelector('.check')
const btn = document.querySelector('button')

btn.addEventListener('click', () =>{
    alert(`${message.value} ${number.value}`)
})



const bot = {
    TOKEN:'6097678281:AAFn0m9sXwpdkL1h0XNdR6u7wzrzCLG_ohE', 
    chatId: '-943823050'
}




//sumbit для form
telegram_form.addEventListener('submit', (e) => {
    // e.preventDefaul остонавливает перезагрузку -form
    e.preventDefault()
    if(message.value && number.value){
        const telegramMesseage = `Message:${message.value} Number:${number.value}`
        const TELEGRAM_API = `https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatId}-943823050&text=${telegramMesseage}`
        fetch(TELEGRAM_API)
            .then(respons => {
                console.log(respons);
                if(respons.ok){
                    alert('messagr success')
                }
            })
            .catch(error => {
                alert(error)
            })
    }else{
        alert('not validated')
    }

})

check.addEventListener('click', () => {
    alert('check')
})
// тг бот



// let card = document.querySelectorAll(".card"); 
// for( let i = 1; i <= card.length; i++ ){ 
//     document.documentElement.style.setProperty("--face_height_" + i + "", document.querySelector(".card-container .card:nth-child(" + i + ") .face-2").scrollHeight + "px"); 
// }   




function toggledark() {
    if (localStorage.getItem('theme') === 'dark') {
        localStorage.removeItem('theme');
        document.body.classList.remove("dark");
        } else {
        localStorage.setItem('theme', 'dark');
        document.body.classList.add("dark");
    }
}
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    document.getElementById('toggledark').checked = true;
} else {
    document.body.classList.remove('dark');
    document.getElementById('toggledark').checked = false;
}





function showProductDetails(productId) {
    var productDetails = getProductDetails(productId);
    document.getElementById('selected-product').innerHTML = `
      <h3>${productDetails.title}</h3>
      <p>${productDetails.description}</p>
      <img src="${productDetails.image}" alt="${productDetails.title}">
    `;
  }
  
  
  
  // Пример функции, которая возвращает информацию о товаре на основе его ID
  function getProductDetails(productId) {
    var products = {
      1: {
        title: 'Товар 1',
        image: 'https://avatars.mds.yandex.net/i?id=1f1bef9dc2d6119b0d9d69982d2797e262bf34ea-9065783-images-thumbs&n=13',
        description: 'Описание товара 1'
      },
      2: {
        title: 'Товар 2',
        image: 'https://i.pinimg.com/736x/34/0f/37/340f37ae4f36826f3571a2f9c64544ec.jpg',
        description: 'Описание товара 2'
      },
      3: {
        title: 'Товар 3',
        image: 'https://w.forfun.com/fetch/39/399f74771a37da97630f86e85696f882.jpeg',
        description: 'Описание товара 3'
      },
      4: {
        title: 'Товар 4',
        image: 'https://avatars.mds.yandex.net/i?id=6d7f1d72415579d050e5ddfa6c59697b-7042922-images-thumbs&n=13',
        description: 'Описание товара 4'
      },
      5: {
        title: 'Товар 5',
        image: 'https://i.pinimg.com/474x/d1/4f/66/d14f66ddf892b7406a2113e022698a6e.jpg',
        description: 'Описание товара 5'
      },
      6: {
        title: 'Товар 6',
        image: 'https://klike.net/uploads/posts/2019-05/1556705582_1.jpg',
        description: 'Описание товара 6'
      },
      7: {
        title: 'Товар 7',
        image: 'https://ic.pics.livejournal.com/shakko.ru/2710882/3965577/3965577_original.jpg',
        description: 'Описание товара 7'
      },
      8: {
        title: 'Товар 8',
        image: 'https://img2.akspic.ru/previews/3/5/5/3/7/173553/173553-voda-lazurnyj-vodoem-podzemnye_vody-morskaya_biologiya-500x.jpg',
        description: 'Описание товара 8'
      },
      9: {
        title: 'Товар 9',
        image: 'https://img3.akspic.ru/previews/9/6/1/9/6/169169/169169-ty_zasluzhivaesh_vsyacheskogo_schastya-schaste-strah-voda-polety_na_vozdushnom_share-500x.jpg',
        description: 'Описание товара 9'
      },
      10: {
        title: 'Товар 10',
        image: 'https://img2.akspic.ru/previews/8/9/4/1/7/171498/171498-betmen-supergeroj-komiksy_dc-komiksy-kino-500x.jpg',
        description: 'Описание товара 10'
      }
    };
  
    return products[productId];
  }





















