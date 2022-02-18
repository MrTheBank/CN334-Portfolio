<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Ponlapat Ittiratchapong - @yield('title')</title>

    <link href="{{ mix('css/app.css') }}" rel="stylesheet">

    <script src="https://kit.fontawesome.com/d7c0722fb3.js" crossorigin="anonymous"></script>
</head>
<body class="auth">
    <nav class="navbar navbar-expand-md navbar-dark nav-portfolio">
        <div class="container-fluid">
            <div class="logo">
                <a href="{{ url('/admin') }}">Ponlapat</a>
            </div>
            <div class="social-button ms-auto">
                <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarPortfolio" aria-controls="navbarPortfolio" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fa-solid fa-bars"></i>
                </button>
            </div>

            <div class="collapse navbar-collapse justify-content-center" id="navbarPortfolio">
                <ul class="navbar-nav mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link {{ navbarActive('admin') }}" aria-current="page" href="{{ url('/admin') }}">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link {{ navbarActive('admin/skills*') }}" href="{{ url('/admin/skills') }}">Skills</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link {{ navbarActive('admin/portfolio*') }}" href="{{ url('/admin/portfolio') }}">Portfolio</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
@yield('content')
<script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
