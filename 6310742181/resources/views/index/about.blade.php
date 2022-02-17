@extends('layouts.index')

@section('title', 'About')

@section('content')
<div id="about"
     data-image-src="{{ asset('images/ponlapat_ittiratchapong.png') }}"
     data-api-src="{{ url('api') }}"
>
    <About />
</div>
@stop
