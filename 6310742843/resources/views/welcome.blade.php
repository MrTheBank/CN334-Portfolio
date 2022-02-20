<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>

        <!-- CSS Style -->
        <link href="{{ mix('css/app.css') }}" rel="stylesheet">


        <style>
            .pagesize {
                min-height: 768px;
                max-height: 1080px;
                position: relative;
            }
            #aboutme {
                height: 100vh;
                width: 100%;
            }
            #who_am_i_pic {
                margin-top: 60px;
                margin-left: 40px;
                margin-right: 20px;
                float: left;
                box-shadow: 10px 10px 42px 0 rgba(0,0,0,0.75)
            }
            #who_am_i {
                margin-top: 100px;
            }

            #addblog {
                position: fixed;
                bottom: 10px;
                right: 10px;
            }
        </style>

    </head>
    <body class="antialiased">
    <div id="navbar"></div>
    <!-- Display card image and title with a writing animation -->
    <div class="pagesize">
        <div id="aboutme"></div>
    </div>
    <!-- Use your pic on the left and descrip who you are -->
    <div class="pagesize" style="background-color: #f7f7f7;">
        <div id="who_am_i_pic" class="box">
            <div id="profile"></div>
        </div>
        <div id="who_am_i">
            <div id="descrip" style="color: #999999;"></div>
            <div id="icon"></div>
        </div>
    </div>
    <!-- Show my work and have an option to add work -->
    <div class="pagesize" style="background-color:#f8f9fa; padding-top: 50px">
        <h1 style="text-align: center">My Portfolio</h1>
        <div style="margin-left:20%; padding-top: 50px" id="album"></div>
    </div>

    <!-- Contact Information -->
    <footer style="text-align: center">
        <h3>Contact</h3>
        <p>pukkanun.som@dome.tu.ac.th</p>
        <p>099-999-9999</p>
    </footer>
    <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>
