<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="{{ mix('css/app.css') }}" rel="stylesheet">

        <style>
            #introduction {
                text-indent: 25vh;
                padding-top: 20vh;
                background-image: url("https://picsum.photos/1980/1080");
                background-repeat: no-repeat;
                background-size: cover;
                height: 100vh;
                width: 100%;
            }

            #who_am_i {
                margin-top: -60px;
                margin-left: 40px;
                background-color: #f7f7f7;
            }
        </style>

    </head>
    <body class="antialiased">
    <div id="navbar"></div>

    <div id="introduction">
        <h1><b>I'M PUKKANUN SOMBUTTHAI</b></h1>
        <h5>Model Designer, Developer</h5>
    </div>

    <div id="who_am_i">
        <h4 style="float: left;"><div id="profile"></div></h4>
    </div>

    <div id="descrip" style="color: #999999"></div>
    <div id="icon"> </div>

    <div id="aboutme"></div>

    <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>
