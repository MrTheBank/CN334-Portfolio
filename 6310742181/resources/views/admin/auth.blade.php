<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Ponlapat Ittiratchapong - Authentication</title>

    <link href="{{ mix('css/app.css') }}" rel="stylesheet">

    <script src="https://kit.fontawesome.com/d7c0722fb3.js" crossorigin="anonymous"></script>
</head>
<body class="auth">
<div class="container">
    <div class="align-items-center justify-content-center flex-column row auth-full-height">
        <div class="col-lg-8">
            <h1 class="text-center pb-5 display-3">Authentication</h1>
            @if ($errors->any())
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Warning!</strong> {{$errors->first()}}
                <button type="button" class="btn-close" data-mdb-dismiss="alert" aria-label="Close"></button>
            </div>
            @endif
            <form method="post">
                @csrf
                <div>
                    <label htmlFor="formPassword">Password</label>
                    <input type="password" name="password" id="formPassword" class="form-control form-control-lg" required/>
                </div>
                <div class="text-end pt-4">
                    <button type="submit" class="btn btn-success btn-lg">Submit</button>
                </div>
            </form>
        </div>
    </div>
</div>
<script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
