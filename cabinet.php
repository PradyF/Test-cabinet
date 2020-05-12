<?php
    //var_dump($_COOKIE)
    if ( !isset($_COOKIE['email']) OR trim($_COOKIE['email']) == ''){
        header("Location: index.html");
        exit;
    }
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="shortcut icon" href="favicon.png" type="image/png">
    <title>User cabinet</title>
    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--Import materialize.css-->
    <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>
    <link type="text/css" rel="stylesheet" href="css/style.css"  media="screen,projection"/>
    <link type="text/css" rel="stylesheet" href="css/chips.css"  media="screen,projection"/>
    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col l12 center-align">
                <h1 class="user-cabinet-header">User Cabinet</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col l12 center-align">
            <button id="logout" class="waves-effect waves-light btn deep-orange accent-3"><i class="material-icons right">power_settings_new</i>LogOut</button>
            </div>
        </div>
        <div class="row">
            <div class="col l6">
            <form>
            <div class="row">
         <div class="input-field col s6">
            <input id="signup-name" type="text" class="validate">
            <label class="active" for="signup-name">Name</label>
         </div>
         <div class="input-field col s6">
            <input id="signup-pass" type="text" class="validate">
            <label class="active" for="signup-pass">Password</label>
         </div>
         <div class="input-field col s12">
            <input id="signup-birthday" type="text" class="datepicker">
            <label class="active" for="signup-birthday">Birthday</label>
         </div>
            </div>
            <div class="col l12">
                
                <p><label><input type="radio" value="male" name="sex" class="sex"><span>Male</span></label></p>
                <p><label><input type="radio" value="female" name="sex" class="sex"><span>Female</span></label></p>
                <p><label><input type="radio" value="other" name="sex" class="sex"><span>Other</span></label></p>
                </div>
                    <div class="col l12 right-align">
                    <button id="signup-submit" class="waves-effect waves-light btn green accent-4"><i class="material-icons right">replay</i>Update</button>
                    </div>
            </form>
            </div>
        </div>
    </div>

<script src="js/chips.js"></script>
<script src="script/materialize.min.js"></script>
<script src="js/ajax.js"></script>
<script src="js/get_user_data.js"></script>
<script src="js/logout.js"></script>
</body>

</html>