<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Ponlapat Ittiratchapong - @yield('title')</title>

        <link href="{{ mix('css/app.css') }}" rel="stylesheet">

        <script src="https://kit.fontawesome.com/d7c0722fb3.js" crossorigin="anonymous"></script>
    </head>
    <body>
    <nav class="navbar navbar-expand-md navbar-dark nav-portfolio">
        <div class="container-fluid">
            <div class="logo">
                <a href="{{ url('/') }}">Ponlapat</a>
            </div>
            <div class="social-button ms-auto">
                <a href="mailto:ponlapat.itt@dome.tu.ac.th"><i class="fa-solid fa-envelope"></i></a>
                <a href="https://www.linkedin.com/in/ponlapat-ittiratchapong-842586219" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/MrTheBank" target="_blank"><i class="fa-brands fa-github"></i></a>

                <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarPortfolio" aria-controls="navbarPortfolio" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fa-solid fa-bars"></i>
                </button>
            </div>

            <div class="collapse navbar-collapse justify-content-center" id="navbarPortfolio">
                <ul class="navbar-nav mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link {{ navbarActive('/') }}" aria-current="page" href="{{ url('') }}">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link {{ navbarActive('about') }}" href="{{ url('/about') }}">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{ url('/portfolio') }}">Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{ url('/contact') }}">Contact</a>
                    </li>
                </ul>
            </div>
            <div class="social-button-md">
                <a href="mailto:ponlapat.itt@dome.tu.ac.th"><i class="fa-solid fa-envelope"></i></a>
                <a href="https://www.linkedin.com/in/ponlapat-ittiratchapong-842586219" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/MrTheBank" target="_blank"><i class="fa-brands fa-github"></i></a>
            </div>
        </div>
    </nav>
@yield('content')
    <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>
