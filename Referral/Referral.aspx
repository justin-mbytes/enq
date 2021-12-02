<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="Referral.aspx.vb" Inherits="KineticEducationAU.Referral" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
   <meta charset="utf-8" />
   <title>Kinetic Education - Referrals</title>
   <meta name="description" content="Study buddy to learn maths and literacy for school kids from kinder to grade 12" />
   <meta name="keywords" content="online learning, maths tuition, online maths, homework help, home schooling, literacy, help with maths, maths games, grammar, study buddy" />
   <link rel="apple-touch-icon" sizes="57x57" href="image/favicon/apple-icon-57x57.png" />
   <link rel="apple-touch-icon" sizes="60x60" href="image/favicon/apple-icon-60x60.png" />
   <link rel="apple-touch-icon" sizes="72x72" href="image/favicon/apple-icon-72x72.png" />
   <link rel="apple-touch-icon" sizes="76x76" href="image/favicon/apple-icon-76x76.png" />
   <link rel="apple-touch-icon" sizes="114x114" href="image/favicon/apple-icon-114x114.png" />
   <link rel="apple-touch-icon" sizes="120x120" href="image/favicon/apple-icon-120x120.png" />
   <link rel="apple-touch-icon" sizes="144x144" href="image/favicon/apple-icon-144x144.png" />
   <link rel="apple-touch-icon" sizes="152x152" href="image/favicon/apple-icon-152x152.png" />
   <link rel="apple-touch-icon" sizes="180x180" href="image/favicon/apple-icon-180x180.png" />
   <link rel="icon" type="image/png" sizes="192x192" href="image/favicon/android-icon-192x192.png" />
   <link rel="icon" type="image/png" sizes="32x32" href="image/favicon/favicon-32x32.png" />
   <link rel="icon" type="image/png" sizes="96x96" href="image/favicon/favicon-96x96.png" />
   <link rel="icon" type="image/png" sizes="16x16" href="image/favicon/favicon-16x16.png" />
   <link rel="manifest" href="image/favicon/manifest.json" />
   <meta name="msapplication-TileColor" content="#ffffff" />
   <meta name="msapplication-TileImage" content="image/favicon/ms-icon-144x144.png" />
   <meta name="theme-color" content="#ffffff" />
   <link rel="stylesheet" type="text/css" href="Style/Referral.css" />
   <link rel="stylesheet" type="text/css" href="Style/common.css" />
   <link rel="stylesheet" type="text/css" href="Style/footer.css" />
   <script src="Script/jquery-1.11.3.min.js"></script>
   <script type="text/javascript" src="Script/Referral.js"></script>
</head>

<body>
   <!-- Header -->
   <div id="ke_logo_header">
      <div class="ke_logo_image" onclick="parent.open('http://www.kineticeducation.com.au')"></div>
   </div>

   <div id="top_banner_image_and_icons_section_container">
      <!-- Main: Heading BG + Text -->
      <div id="top_banner_image">
         <p>Refer your friends and family and receive a gift from Kinetic Education.</p>
      </div>

      <!-- Main: Icons + Text -->
      <div id="icons_section">
         <div class="icons_individual_container">
            <div id="icons_individual_container_step1" class="icons_individual_image"></div>
            <p class="icon_title">Step 1</p>
            <p class="icon_text">Happy family using Kinetic Education.</p>
         </div>

         <div class="icons_individual_container">
            <div id="icons_individual_container_step2" class="icons_individual_image"></div>
            <p class="icon_title">Step 2</p>
            <p class="icon_text">Fill in form to refer friends and family.</p>
         </div>

         <div class="icons_individual_container icons_individual_container_last">
            <div id="icons_individual_container_step3" class="icons_individual_image"></div>
            <p class="icon_title">Step 3</p>
            <p class="icon_text">You receive a gift for every family that joins.</p>
         </div>
      </div>
   </div>

   <!-- Main: Select gift -->
   <div id="select_gift_container">
      <p class="select_gift_title">Select your gift</p>
      <div class="gift_box_container">
         <p class="gift_title">$75 WISH Gift Card</p>
         <div class="gift_box_line"></div>
         <div id="gift_image_01" class="gift_image"></div>
         <div id="gift_1_btn" class="gift_select_btn gift_select_btn_default">
            <p>Select</p>
         </div>
      </div>

      <div class="gift_box_container">
         <p class="gift_title">$75 JB Hi-Fi Gift Card</p>
         <div class="gift_box_line"></div>
         <div id="gift_image_02" class="gift_image"></div>
         <div id="gift_2_btn" class="gift_select_btn gift_select_btn_default">
            <p>Select</p>
         </div>
      </div>

      <div class="gift_box_container gift_box_container_last">
         <p class="gift_title">$75 Smiggle Gift Card</p>
         <div class="gift_box_line"></div>
         <div id="gift_image_03" class="gift_image"></div>
         <div id="gift_3_btn" class="gift_select_btn gift_select_btn_default">
            <p>Select</p>
         </div>
      </div>
   </div>

   <form id="referral_form" runat="server">

      <!-- Main: Who are you -->
      <div id="who_are_you_continer">
         <p class="who_are_you_title">Who are you?</p>
         <p class="who_are_you_text">Let us know who you are, so we know who to send the gift to.</p>
         <div id="who_are_you_fields_container">
            <asp:TextBox ID="txtFirstName" class="who_are_you_field who_are_you_field_user_name" name="first_name" placeholder="First name" MaxLength="50" TabIndex="1" runat="server"></asp:TextBox>
            <asp:TextBox ID="txtLastName" class="who_are_you_field who_are_you_field_user_name" name="last_name" placeholder="Last name" MaxLength="50" TabIndex="1" runat="server"></asp:TextBox>
            <asp:TextBox ID="txtEmail" class="who_are_you_field who_are_you_field_email" name="email" placeholder="Email" MaxLength="50" TabIndex="1" runat="server"></asp:TextBox>
            <asp:TextBox ID="txtPhone" class="who_are_you_field who_are_you_field_last who_are_you_field_user_contact" name="user_contact" placeholder="Phone" MaxLength="50" TabIndex="2" runat="server"></asp:TextBox>
         </div>
      </div>

      <!-- Main: Referral forms -->
      <div id="referral_form_heading_container">
         <p>Start filling in your friend’s and family’s details below</p>
      </div>
      <div id="referral_form_container">
         <div id="referral_form_container_arrow"></div>
         <div id="referral_space"></div>

         <div id="referral_boxes">

            <div id="divReferral1" class="referral_box">
               <p class="referral_box_title">Referral #1</p>
               <input id="txtReferralName1" class="referral_field referral_field_referral_name" name="referral_name_01" placeholder="Name" maxlength="50" tabindex="3" />
               <input id="txtReferralPhone1" class="referral_field referral_field_referral_contact" name="referral_contact_01" placeholder="Phone" maxlength="50" tabindex="4" />
               <select id="ddlReferral1" class="drop-arrow referral_field referral_field_referral_kids" tabindex="5">
                  <option class="disabled-select" value="-1" disabled selected>No. of children</option>
                  <option class="select_row" value="1">One</option>
                  <option class="select_row" value="2">Two</option>
                  <option class="select_row" value="3">Three</option>
                  <option class="select_row" value="4">Four</option>
                  <option class="select_row" value="5">Five</option>
                  <option class="select_row" value="5+">5+</option>
               </select>
            </div>

            <div id="divReferral2" class="referral_box referral_box_odd">
               <p class="referral_box_title">Referral #2</p>
               <input id="txtReferralName2" class="referral_field referral_field_referral_name" name="referral_name_01" placeholder="Name" maxlength="50" tabindex="3" />
               <input id="txtReferralPhone2" class="referral_field referral_field_referral_contact" name="referral_contact_01" placeholder="Phone" maxlength="50" tabindex="4" />
               <select id="ddlReferral2" class="drop-arrow referral_field referral_field_referral_kids" tabindex="5">
                  <option class="disabled-select" value="-1" disabled selected>No. of children</option>
                  <option class="select_row" value="1">One</option>
                  <option class="select_row" value="2">Two</option>
                  <option class="select_row" value="3">Three</option>
                  <option class="select_row" value="4">Four</option>
                  <option class="select_row" value="5">Five</option>
                  <option class="select_row" value="5+">5+</option>
               </select>
            </div>

            <div id="divReferral3" class="referral_box">
               <p class="referral_box_title">Referral #3</p>
               <input id="txtReferralName3" class="referral_field referral_field_referral_name" name="referral_name_01" placeholder="Name" maxlength="50" tabindex="3" />
               <input id="txtReferralPhone3" class="referral_field referral_field_referral_contact" name="referral_contact_01" placeholder="Phone" maxlength="50" tabindex="4" />
               <select id="ddlReferral3" class="drop-arrow referral_field referral_field_referral_kids" tabindex="5">
                  <option class="disabled-select" value="-1" disabled selected>No. of children</option>
                  <option class="select_row" value="1">One</option>
                  <option class="select_row" value="2">Two</option>
                  <option class="select_row" value="3">Three</option>
                  <option class="select_row" value="4">Four</option>
                  <option class="select_row" value="5">Five</option>
                  <option class="select_row" value="5+">5+</option>
               </select>
            </div>

            <div id="divReferral4" class="referral_box referral_box_odd">
               <p class="referral_box_title">Referral #4</p>
               <input id="txtReferralName4" class="referral_field referral_field_referral_name" name="referral_name_01" placeholder="Name" maxlength="50" tabindex="3" />
               <input id="txtReferralPhone4" class="referral_field referral_field_referral_contact" name="referral_contact_01" placeholder="Phone" maxlength="50" tabindex="4" />
               <select id="ddlReferral4" class="drop-arrow referral_field referral_field_referral_kids" tabindex="5">
                  <option class="disabled-select" value="-1" disabled selected>No. of children</option>
                  <option class="select_row" value="1">One</option>
                  <option class="select_row" value="2">Two</option>
                  <option class="select_row" value="3">Three</option>
                  <option class="select_row" value="4">Four</option>
                  <option class="select_row" value="5">Five</option>
                  <option class="select_row" value="5+">5+</option>
               </select>
            </div>

            <div id="divReferral5" class="referral_box">
               <p class="referral_box_title">Referral #5</p>
               <input id="txtReferralName5" class="referral_field referral_field_referral_name" name="referral_name_01" placeholder="Name" maxlength="50" tabindex="3" />
               <input id="txtReferralPhone5" class="referral_field referral_field_referral_contact" name="referral_contact_01" placeholder="Phone" maxlength="50" tabindex="4" />
               <select id="ddlReferral5" class="drop-arrow referral_field referral_field_referral_kids" tabindex="5">
                  <option class="disabled-select" value="-1" disabled selected>No. of children</option>
                  <option class="select_row" value="1">One</option>
                  <option class="select_row" value="2">Two</option>
                  <option class="select_row" value="3">Three</option>
                  <option class="select_row" value="4">Four</option>
                  <option class="select_row" value="5">Five</option>
                  <option class="select_row" value="5+">5+</option>
               </select>
            </div>

            <div id="divReferral6" class="referral_box referral_box_odd">
               <p class="referral_box_title">Referral #6</p>
               <input id="txtReferralName6" class="referral_field referral_field_referral_name" name="referral_name_01" placeholder="Name" maxlength="50" tabindex="3" />
               <input id="txtReferralPhone6" class="referral_field referral_field_referral_contact" name="referral_contact_01" placeholder="Phone" maxlength="50" tabindex="4" />
               <select id="ddlReferral6" class="drop-arrow referral_field referral_field_referral_kids" tabindex="5">
                  <option class="disabled-select" value="-1" disabled selected>No. of children</option>
                  <option class="select_row" value="1">One</option>
                  <option class="select_row" value="2">Two</option>
                  <option class="select_row" value="3">Three</option>
                  <option class="select_row" value="4">Four</option>
                  <option class="select_row" value="5">Five</option>
                  <option class="select_row" value="5+">5+</option>
               </select>
            </div>
            <div id="divPlaceHolder"></div>

            <asp:LinkButton ID="linkbtnSubmit" runat="server">
            <div class="referral_submit_btn">
               <p>Submit</p>
            </div>
            </asp:LinkButton>

            <asp:HiddenField ID="hidGiftCard" Value="" runat="server" />
            <asp:HiddenField ID="hidReferralInfo" Value="" runat="server" />
            <p class="referral_conditions"><span class="referral_conditions_bold">*Conditions:</span> You are entitled to the gift you have selected for each family you refer after they have joined the programs, and made at least their first monthly payment. There is no limit to the number of families you refer. Families you refer must acknowledge they know who you are.</p>
         </div>
      </div>

   </form>

   <!-- Footer -->
   <div id="main_footer">
      <div class="section_div">
         <div class="footer-blocks footer-ke-graphic">
            <a href="../index.html">
               <div class="footer-ke-logo"></div>
            </a>
            <div class="footer-social">
               <a href="https://www.facebook.com/kineticedu" target="_blank">
                  <div class="social-icon facebook-icon"></div>
               </a>
               <a href="http://www.youtube.com/user/KineticEducation?feature=watch" target="_blank">
                  <div class="social-icon youtube-icon"></div>
               </a>
               <a href="https://plus.google.com/102335947054947677048" target="_blank">
                  <div class="social-icon googleplus-icon"></div>
               </a>
            </div>
         </div>
         <div class="footer-blocks">
            <p class="footer-heading">Get in touch</p>
            <p>
               1800 262 847<br>
               <a href="mailto:info@kineticeducation.com.au">info@kineticeducation.com.au</a><br class="double_space">
               <br class="double_space">
            </p>
            <p class="footer-heading">Members Support</p>
            <p>
               1800 622 657<br>
               <a href="mailto:support@kineticeducation.com.au">support@kineticeducation.com.au</a>
            </p>
         </div>
         <div class="footer-blocks">
            <p class="footer-heading">Where are we?</p>
            <p>
               We support students Australia-wide
            </p>
            <p>
               Head Office:<br>
               Level 1, 506 Nepean Hwy,<br>
               Frankston, VIC - 3199
            </p>
            <p>
               Kinetic Education, P.O. Box 1153,<br>
               Frankston, VIC - 3199
            </p>
         </div>
         <div class="footer-blocks">
            <p class="footer-heading">International Distributors</p>
            <p>
               <a class="distributors_link" href="../int_distributors.html">View official distributors</a>
            </p>
         </div>
      </div>
      <div class="section_div" style="text-align: center; margin-top: 40px;">
         <span id="ptyltd">© Kinetic Education (AUST) Pty Ltd - All rights reserved</span>
      </div>
   </div>
</body>
</html>
