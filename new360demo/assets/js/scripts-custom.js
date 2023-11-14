"use strict";
// menu
// $(document).on('click', '.HDM-btn', function () {
//     $('.HDM').addClass('active');
//     $('.overlay-menu').addClass('active');
//     $('body').addClass('no-scroll');
// });

// $(document).on('click', '.NST-btn', function () {
//     $('.NST').addClass('active');
//     $('.overlay-menu').addClass('active');
//     $('body').addClass('no-scroll');
// });

// $(document).on('click', '.AsiaHostrical-btn', function () {
//     $('.AsiaHostrical').addClass('active');
//     $('.overlay-menu').addClass('active');
//     $('body').addClass('no-scroll');
// });
// $(document).on('click', '.Actions-btn', function () {
//     $('.Actions').addClass('active');
//     $('.overlay-menu').addClass('active');
//     $('body').addClass('no-scroll');
// });

// $(document).on('click', '.close-menu,.overlay-menu', function () {
//     $('.HDM').removeClass('active');
//     $('.NST').removeClass('active');
//     $('.AsiaHostrical').removeClass('active');
//     $('.Actions').removeClass('active');
//     $('.NST').removeClass('active');
//     $('.NST').removeClass('active');
//     $('.NST').removeClass('active');
//     $('.NST').removeClass('active');
    
//     $('.overlay-menu').removeClass('active');
//     $('body').removeClass('no-scroll');
// });


// toggle btn
// $(document).on('change', '.certificate .form-check-input', function () {
//     if (this.checked){
//         $(this).closest('.certificate').find('.certificate-ul input').prop("type", "text")
//     }
//     else {
//         $(this).closest('.certificate').find('.certificate-ul input').prop("type", "password")
//     }   
// });

// $(document).on('change', '.phone-part .form-check-input', function () {
//     if (this.checked){
//         $(this).closest('.phone-part').find('.phone-ul input').prop("type", "text")
//     }
//     else {
//         $(this).closest('.phone-part').find('.phone-ul input').prop("type", "password")
//     }   
// });

// $(document).on('change', '.lname-part .form-check-input', function () {
//     if (this.checked){
//         $(this).closest('.lname-part').find('.lname-ul input').prop("type", "text")
//     }
//     else {
//         $(this).closest('.lname-part').find('.lname-ul input').prop("type", "password")
//     }   
// });

// $(document).on('change', '.birth-part .form-check-input', function () {
//     if (this.checked){
//         $(this).closest('.birth-part').find('.birth-ul input').prop("type", "text")
//     }
//     else {
//         $(this).closest('.birth-part').find('.birth-ul input').prop("type", "password")
//     }   
// });

// $(document).on('change', '.email-part .form-check-input', function () {
//     if (this.checked){
//         $(this).closest('.email-part').find('.email-ul input').prop("type", "text")
//     }
//     else {
//         $(this).closest('.email-part').find('.email-ul input').prop("type", "password")
//     }   
// });

// $(document).on('change', '.address-part .form-check-input', function () {
//     if (this.checked){
//         $(this).closest('.address-part').find('.address-ul input').prop("type", "text")
//     }
//     else {
//         $(this).closest('.address-part').find('.address-ul input').prop("type", "password")
//     }   
// });


// super agent active
$(document).on('click', '.agentbox ul li', function () {
    $('.agentbox ul li').removeClass('active');
    $(this).addClass('active');
});

// toggle light & dark mode
// $(document).ready(function(){
//     $('html').attr('data-theme','dark');
//     if(localStorage.theme) {
//         $('html').attr('data-theme', localStorage.theme);
//     } 
//     else{
//         $('html').attr('data-theme','dark');
//     }
//     $(document).on('click', '.toggle-mode', function () {
//          if ($('html').attr('data-theme') == 'dark'){
//             $('html').attr('data-theme','light');
//             localStorage.theme = 'light';
//          }
//          else  {
//             $('html').attr('data-theme','dark');
//             localStorage.theme = 'dark';
//          }
//        });
// });

