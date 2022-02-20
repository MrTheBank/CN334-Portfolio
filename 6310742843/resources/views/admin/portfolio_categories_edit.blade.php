@extends('layouts.admin')

@section('title', 'Edit category #' . $category['id'])

@section('content')
    <div class="container pt-5">
        @if ($errors->any())
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Warning!</strong><br/>
                <ul>
                    @foreach($errors->all() as $e)
                        <li>{{ $e }}</li>
                    @endforeach
                </ul>
                <button type="button" class="btn-close" data-mdb-dismiss="alert" aria-label="Close"></button>
            </div>
        @endif
        <h1>Edit category #{{ $category['id'] }}</h1>
        <form method="post">
            @csrf
            <div class="mb-2">
                <label for="formName">Category Name</label>
                <input type="text" name="name" id="formName" value="{{ $category['name'] }}" class="form-control" required/>
            </div>
            <div class="text-end mt-4">
                <button type="submit" class="btn btn-success">Save</button>
            </div>
        </form>
    </div>
@stop
