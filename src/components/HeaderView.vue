<template>
  <div class="headerDiv">
    <div class="logoPlacemet">Job Portal</div>
    <div class="profileOptions">
      <div class="profileMenu">
        <button>Applicant name</button>
        <div class="profileMenu-options">
          <a href="#">My Profile</a>
          <a href="#">Logout</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderView",
};
</script>

<style>
html, body {
  padding: 0;
  margin: 0;
  height: 100%;
  background-color: #F0FFF0;
}
#app {
  height: 100%;
}
.headerDiv {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  background-color: #001F3F;
  height: 10%;
  align-items: center;
}
.logoPlacemet {
  font-size: x-large;
  padding-left: 3%;
  color: #F0FFF0;
}
.profileOptions {
  margin-left: auto;
  margin-right: 3%;
}
.profileMenu {
  display: inline-block;
  position: relative;
}
button{
  border:none;
  border-radius:5px;
  padding:5px 10px;
  font-size:15px;
  cursor:pointer;
  background-color: #9AC1F0;
  color: #2F4F4F;
}
button:hover{
  background-color:#9AC1F0;
}
.profileMenu-options {
  display: none;
  position: absolute;
  overflow: auto;
  font-size:15px;
  background-color:#9AC1F0;
  border-radius:3px;
  box-shadow: 0px 10px 10px 0px rgba(0,0,0,0.4);
  color: #2F4F4F;
}
.profileMenu:hover .profileMenu-options {
  display: block;
  color: #2F4F4F;
}
.profileMenu-options a {
  display: block;
  color: #2F4F4F;
  padding: 3px;
  text-decoration: none;
  padding:15px 30px;
}
.profileMenu-options a:hover {
  color: #2F4F4F;
  background-color: #ddd;
  border-radius:5px;
}
</style>
