@extends('layouts.admin')

@section('title', 'Edit category #' . $portfolio['id'])

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
        <h1>Edit portfolio #{{ $portfolio['id'] }}</h1>
        <form method="post">
            @csrf
            <div class="mb-2">
                <label for="formTitle">Title</label>
                <input type="text" name="title" id="formTitle" class="form-control form-control-sm" value="{{ $portfolio['title'] }}" required/>
            </div>
            <div class="mb-2">
                <label for="formCategory">Category</label>
                <select class="form-select form-select-sm" name="category_id" id="formCategory" required>
                    @foreach ($category as $i)
                        @if ($portfolio['id'] === $i['id'])
                            <option value="{{ $i['id'] }}" selected>{{ $i['id'] }} - {{ $i['name'] }}</option>
                        @else
                            <option value="{{ $i['id'] }}">{{ $i['id'] }} - {{ $i['name'] }}</option>
                        @endif
                    @endforeach
                </select>
            </div>
            <div class="mb-2">
                <label for="formBackgroundURL">Background URL</label>
                <input type="url" name="background_url" id="formBackgroundURL" class="form-control form-control-sm" autocomplete="off" value="{{ $portfolio['background_url'] }}" required/>
            </div>
            <div class="mb-2">
                <label for="formAlbumURL">Album URL (json format) <small class="text-white-50">Ex. ["...", "...", ...]</small></label>
                <input type="text" name="album_url" id="formAlbumURL" class="form-control form-control-sm" autocomplete="off" value="{{ $portfolio['album_url'] }}" required/>
            </div>
            <div class="mb-2">
                <label for="formDescription">Description</label>
                <textarea name="description" class="form-control" id="formDescription" rows="4">{{ $portfolio['description'] }}</textarea>
            </div>
            <div class="text-end mt-4">
                <button type="submit" class="btn btn-success">Save</button>
            </div>
        </form>
    </div>
@stop
