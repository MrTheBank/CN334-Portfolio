<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="{{ mix('css/app.css') }}" rel="stylesheet">

        <style>
            .pagesize {
                min-height: 768px;
                max-height: 1080px;
                position: relative;
            }
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
                margin-top: 60px;
                margin-left: 40px;
                padding-right: 50px;
                background-color: #f7f7f7;
                float: left;
            }
        </style>

    </head>
    <body class="antialiased">
    <div id="navbar"></div>
    <div class="pagesize">
        <div id="introduction">
            <h1><b>I'M PUKKANUN SOMBUTTHAI</b></h1>
            <h5>Model Designer, Developer</h5>
        </div>
    </div>

    <div class="pagesize">
        <div id="who_am_i">
            <div id="profile"></div>
        </div>
        <div id="descrip" style="color: #999999; margin-top: 20px"></div>
        <div id="icon"></div>
    </div>

    <div class="pagesize">
        <h1 style="text-align: center">My Portfolio</h1>
        <div id="portfolio" style="margin-left: 43%; position: absolute;"></div>
        <div style="margin-left:20%; padding-top: 50px" id="album"></div>
    </div>

    <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>
