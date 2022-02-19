@extends('layouts.index')

@section('title', 'Portfolio')

@section('content')
<div id="portfolio"
     data-api-src="{{ url('api') }}"
>
    <Portfolio />
</div>
@stop
