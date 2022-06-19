// Image Change 

var leftBtn = document.querySelector(' .fa-chevron-left')
var rightBtn = document.querySelector(' .fa-chevron-right')
var image_1 = document.querySelector('.image_1')
var image_2 = document.querySelector('.image_2')
var image_3 = document.querySelector('.image_3')
var currentIndex = 0;



leftBtn.addEventListener('click', function(){
    var img_2_True = image_2.classList.contains('hide')
    var img_1_True = image_1.classList.contains('hide')
    var img_3_True = image_3.classList.contains('hide')

    if(img_3_True == false) {
        image_3.classList.add('hide')
        image_2.classList.remove('hide')
    }
    if(img_2_True == false) {
        image_2.classList.add('hide')
        image_1.classList.remove('hide')
    }

    console.log()

})
rightBtn.addEventListener('click', function(){
    var img_2_True = image_2.classList.contains('hide')
    var img_1_True = image_1.classList.contains('hide')
    var img_3_True = image_3.classList.contains('hide')

    if (img_1_True == false) {
        image_1.classList.add('hide')
        image_2.classList.remove('hide')


    } 
    if (img_2_True == false) {
        image_2.classList.add('hide')
        image_3.classList.remove('hide')


    } 


}) 
//End  Image Change 


//Open Filter
var closeTopicIcon = document.querySelector(' .title .fas.fa-times ')
var topic_left = document.querySelector('.topic')
var filterTopicIcon_out = document.querySelector('.title_out ')
var TopicIcon_out = document.querySelector('.title_out .fas.fa-times ')


closeTopicIcon.onclick = function(){
    filterTopicIcon_out.classList.remove('hide')
    topic_left.classList.add('hide')
}
TopicIcon_out.onclick = function(){
    topic_left.classList.remove('hide')
    filterTopicIcon_out.classList.add('hide')


}




//End Filter





// Modal---Close---Open 

var closeModalIcon = document.querySelector('.nav_modal_logo .btn i')
var modal = document.querySelector('.nav_modal')
var parentModal = document.querySelector('.parent_modal')
var openModalIcon = document.querySelector('.navigation_1 .fas.fa-bars')
var logo = document.querySelector('.navigation_1 .logo')



function modalClose () {
    closeModalIcon.addEventListener('click', function(){
    modal.classList.add('hide')
    parentModal.classList.add('hide')   

    })
}


modalClose();

function modalOpen() {
    openModalIcon.addEventListener('click', function(){
        modal.classList.toggle('hide')
        parentModal.classList.toggle('hide')
    })
}
modalOpen();

// End Modal---Close---Open 





// Modal---Topic---Close---Open 
var topicIconDown = document.querySelector('.topic_header .fas.fa-caret-down')
var topicIconUp = document.querySelector('.topic_header .fas.fa-caret-up')
var topic = document.querySelector('.topic_header_content ul')

function openTopic() {
    topicIconDown.addEventListener('click', function(){

        topicIconDown.classList.toggle('hide')
        topicIconUp.classList.toggle('hide')
        topic.classList.toggle('hide')
    })

}
openTopic();
function closeTopic() {
    topicIconUp.addEventListener('click', function(){

        topicIconDown.classList.toggle('hide')
        topicIconUp.classList.toggle('hide')
        topic.classList.toggle('hide')
    })

}
closeTopic();

//End Modal---Topic---Close---Open 




// Modal---Categories_list---Close---Open 
var dot_1 = document.querySelectorAll('._1')
var dot_2 = document.querySelectorAll('._2')
var dot_3 = document.querySelectorAll('._3')
var dot_4 = document.querySelectorAll('._4')
var dot_5 = document.querySelectorAll('._5')
var dot_6 = document.querySelectorAll('._6')
var dot_7 = document.querySelectorAll('._7')
var dot_8 = document.querySelectorAll('._8')
var dot_9 = document.querySelectorAll('._9')
var dot_10 = document.querySelectorAll('._10')

var list_Icon = document.querySelectorAll('.categories .list_1 i')
var list_2 = document.querySelectorAll('.categories .list_2')

dot_1[0].onclick = function(){
    dot_1[1].classList.toggle('hide')
}
dot_2[0].onclick = function(){
    dot_2[1].classList.toggle('hide')
}
dot_3[0].onclick = function(){
    dot_3[1].classList.toggle('hide')
}
dot_4[0].onclick = function(){
    dot_4[1].classList.toggle('hide')
}
dot_5[0].onclick = function(){
    dot_5[1].classList.toggle('hide')
}
dot_6[0].onclick = function(){
    dot_6[1].classList.toggle('hide')
}
dot_7[0].onclick = function(){
    dot_7[1].classList.toggle('hide')
}
dot_8[0].onclick = function(){
    dot_8[1].classList.toggle('hide')
}
dot_9[0].onclick = function(){
    dot_9[1].classList.toggle('hide')
}
dot_10[0].onclick = function(){
    dot_10[1].classList.toggle('hide')
}


// Buy Modal
var buyIcon = document.querySelector('.content_wrap_info_1 .preview i')    
var buyModalParent = document.querySelector('.parent_cart_modal')
var keepBrowsing = document.querySelector('.cart_modal .action .keep_btn')
var buyModal = document.querySelector('.parent_cart_modal .cart_modal')

    function openBuyModal(){
        buyIcon.addEventListener('click', function(){
            buyModalParent.classList.toggle('hide')
        })

    }
    openBuyModal();

    function closeBuyModal(){ 
        keepBrowsing.addEventListener('click', function(){
            buyModalParent.classList.toggle('hide')
        })
    }
    closeBuyModal();

   
//End Buy Modal


