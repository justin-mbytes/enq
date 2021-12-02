$(document).ready(function () {

   $(".gift_select_btn").click(function () {
      $('.gift_select_btn').not(this).removeClass('gift_select_btn_clicked');
      $(this).toggleClass("gift_select_btn_clicked");
   });

   // Gift selection
   $("div#gift_1_btn p").click(function () {
      $("#hidGiftCard").val("$75 WISH Gift Card");
   });

   $("div#gift_2_btn p").click(function () {
      $("#hidGiftCard").val("$75 JB Hi-Fi Gift Card");
   });

   $("div#gift_3_btn p").click(function () {
      $("#hidGiftCard").val("$75 Smiggle Gift Card");
   });

   //Auto add Referral boxes
   $(document).on("change", "select", function () {
      var TotalddlReferral = $("select[id^=ddlReferral]").length;
      var ddlReferralSelected = 0;

      //count all selected dropdown
      $("div[id^=divReferral]").each(function (index) {

         if ($(this).find("select[id^=ddlReferral] :selected").val() != -1) {
            ddlReferralSelected++;
         }
      });

      // If all dropdown selected then add 2 block's
      if (TotalddlReferral == ddlReferralSelected) {
         TotalddlReferral++;

         //Block #1
         $("#divPlaceHolder").append("<div id='divReferral" + TotalddlReferral + "' class='referral_box'>" +
            "<p class='referral_box_title'>Referral #" + TotalddlReferral + "</p>" +
            "<input Type='TextBox' ID='txtReferralName'" + TotalddlReferral + " class='referral_field referral_field_referral_name' name='referral_name_01' placeholder='Name' MaxLength='50' TabIndex='3' runat='server'>" +
            "<input Type='TextBox' ID='txtReferralPhone'" + TotalddlReferral + " class='referral_field referral_field_referral_contact' name='referral_contact_01' placeholder='Phone' MaxLength='50' TabIndex='4' runat='server'>" +
            "<select ID='ddlReferral'" + TotalddlReferral + " class='drop-arrow referral_field referral_field_referral_kids' TabIndex='5' >" +
               "<option Value='-1' disabled Selected>No. of children</option>" +
               "<option Value='1'>One</option>" +
               "<option Value='2'>Two</option>" +
               "<option Value='3'>Three</option>" +
               "<option Value='4'>Four</option>" +
               "<option Value='5'>Five</option>" +
               "<option Value='5+'>5+</option>" +
            "</select>" +
            "</div>");

         //Block #2
         TotalddlReferral = TotalddlReferral + 1;
         $("#divPlaceHolder").append("<div id='divReferral" + TotalddlReferral + "' class='referral_box referral_box_odd'>" +
            "<p class='referral_box_title'>Referral #" + TotalddlReferral + "</p>" +
            "<input Type='TextBox' ID='txtReferralName'" + TotalddlReferral + " class='referral_field referral_field_referral_name' name='referral_name_01' placeholder='Name' MaxLength='50' TabIndex='3' runat='server'>" +
            "<input Type='TextBox' ID='txtReferralPhone'" + TotalddlReferral + " class='referral_field referral_field_referral_contact' name='referral_contact_01' placeholder='Phone' MaxLength='50' TabIndex='4' runat='server'>" +
            "<select ID='ddlReferral'" + TotalddlReferral + " class='drop-arrow referral_field referral_field_referral_kids' TabIndex='5' >" +
               "<option Value='-1' disabled Selected>No. of children</option>" +
               "<option Value='1'>One</option>" +
               "<option Value='2'>Two</option>" +
               "<option Value='3'>Three</option>" +
               "<option Value='4'>Four</option>" +
               "<option Value='5'>Five</option>" +
               "<option Value='5+'>5+</option>" +
            "</select>" +
            "</div>");
      }

   });

   // validation
   $("#linkbtnSubmit").click(function () {
      var regexp = /^([0-9a-zA-Z]([-\.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;

      if ($("#hidGiftCard").val() == "") {
         // Validate if any gift is selected.
         alert("Please select a gift.");
         return false;
      } else if ($("#txtFirstName").val() == "") {
         alert("Please enter your first name.");
         return false;
      } else if ($("#txtLastName").val() == "") {
         alert("Please enter your last name.");
         return false;
      } else if ($("#txtEmail").val() == "") {
         alert("Please enter your email.");
         return false;
      } else if (!regexp.test($("#txtEmail").val())) {
         alert("Please enter a valid email.");
         return false;
      } else if ($("#txtPhone").val() == "") {
         alert("Please enter your phone number.");
         return false;
      } else if (isNaN($("#txtPhone").val())) {
         alert("Please enter a valid phone number.");
         return false;
      } else if (($("#txtPhone").val().length < 8) || ($("#txtPhone").val().length > 10)) {
         alert("Please enter a valid phone number.");
         return false;
      } else {
         // Validate the referral details.
         var ReferralInfo = "";
         var ValidationFail = false;

         $("div[id^=divReferral]").each(function (index) {

            if (($(this).find("input[id^=txtReferralName]").val() != "") || ($(this).find("input[id^=txtReferralPhone]").val() != "") || ($(this).find("select[id^=ddlReferral] :selected").val() != -1)) {
               //if this referral information is either partially or completely filled, then validate the entries. 

               if ($(this).find("input[id^=txtReferralName]").val() == "") {
                  ValidationFail = true;
                  alert("Please enter name of referral #" + parseInt(index + 1) + ".");
                  return false;
               } else if ($(this).find("input[id^=txtReferralPhone]").val() == "") {
                  ValidationFail = true;
                  alert("Please enter phone number of referral #" + parseInt(index + 1) + ".");
                  return false;
               } else if (isNaN($(this).find("input[id^=txtReferralPhone]").val())) {
                  ValidationFail = true;
                  alert("Please enter a valid phone number for referral #" + parseInt(index + 1) + ".");
                  return false;
               } else if (($(this).find("input[id^=txtReferralPhone]").val().length < 8) || ($(this).find("input[id^=txtReferralPhone]").val().length > 10)) {
                  ValidationFail = true;
                  alert("Please enter a valid phone number for referral #" + parseInt(index + 1) + ".");
                  return false;
               } else if ($(this).find("select[id^=ddlReferral] :selected").val() == "-1") {
                  ValidationFail = true;
                  alert("Please select number of children for referral #" + parseInt(index + 1) + ".");
                  return false;
               } else {
                  if (ReferralInfo != "") {
                     ReferralInfo += "|";
                  }
                  ReferralInfo += $(this).find("input[id^=txtReferralName]").val().trim() + "," + $(this).find("input[id^=txtReferralPhone]").val().trim() + "," + $(this).find("select[id^=ddlReferral] :selected").val();
               }
            }
         });
      }

      if (ReferralInfo == "") {
         alert("Please fill at least one referral.");
         return false;
      } else if (ValidationFail) {
         return false;
      } else {
         $("#hidReferralInfo").val(ReferralInfo);
         return true;
      }
   });



   // Google analytics
   (function (i, s, o, g, r, a, m) {
      i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
         (i[r].q = i[r].q || []).push(arguments)
      }, i[r].l = 1 * new Date(); a = s.createElement(o),
      m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
   })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

   ga('create', 'UA-40373097-1', 'auto');
   ga('send', 'pageview');

});
