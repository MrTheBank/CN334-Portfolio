@extends('layouts.admin')

@section('title', 'PortfolioAPI')

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
        <h1>Portfolio</h1>
        <table class="table table-bordered table-sm text-white">
            <thead class="table-light">
            <tr>
                <th scope="col" style="width: 5%">#</th>
                <th scope="col" style="width: 55%">Title</th>
                <th scope="col" style="width: 20%">Category</th>
                <th scope="col" style="width: 20%">Action</th>
            </tr>
            </thead>
            <tbody>
            @foreach ($portfolio as $i)
                <tr>
                    <td>{{ $i['id'] }}</td>
                    <td>{{ $i['title'] }}</td>
                    <td>
                        @foreach($category as $c)
                            @if ($i['category_id'] === $c['id'])
                                {{ $c['name'] }}
                                @break
                            @endif
                        @endforeach
                    </td>
                    <td>
                        <div class="d-inline-flex">
                            <a href="{{ url('admin/portfolio/portfolios/' . $i['id']) }}" class="btn btn-warning btn-sm me-2">Edit</a>
                            <form method="post" action="{{ url('admin/portfolio/portfolios/' . $i['id']) }}">
                                @csrf
                                @method('delete')
                                <button type="submit" class="btn btn-danger btn-sm">Delete</button>
                            </form>
                        </div>
                    </td>
                </tr>
            @endforeach
            </tbody>
        </table>
        <form method="post" action="{{ url('admin/portfolio/portfolios') }}">
            @csrf
            <div class="mb-2">
                <label for="formTitle">Title</label>
                <input type="text" name="title" id="formTitle" class="form-control form-control-sm" required/>
            </div>
            <div class="mb-2">
                <label for="formCategory">Category</label>
                <select class="form-select form-select-sm" name="category_id" id="formCategory" required>
                    <option selected disabled>Open this select category</option>
                    @foreach ($category as $i)
                        <option value="{{ $i['id'] }}">{{ $i['id'] }} - {{ $i['name'] }}</option>
                    @endforeach
                </select>
            </div>
            <div class="mb-2">
                <label for="formBackgroundURL">Background URL</label>
                <input type="url" name="background_url" id="formBackgroundURL" class="form-control form-control-sm" autocomplete="off" required/>
            </div>
            <div class="mb-2">
                <label for="formAlbumURL">Album URL (json format) <small class="text-white-50">Ex. ["...", "...", ...]</small></label>
                <input type="text" name="album_url" id="formAlbumURL" class="form-control form-control-sm" autocomplete="off" required/>
            </div>
            <div class="mb-2">
                <label for="formDescription">Description</label>
                <textarea name="description" class="form-control" id="formDescription" rows="4"></textarea>
            </div>
            <div class="text-end mt-4">
                <button type="submit" class="btn btn-success">Create new portfolio</button>
            </div>
        </form>

        <hr/>

        <h1>Portfolio Category</h1>
        <table class="table table-bordered table-sm text-white">
            <thead class="table-light">
            <tr>
                <th scope="col" style="width: 5%">#</th>
                <th scope="col" style="width: 75%">Name</th>
                <th scope="col" style="width: 20%">Action</th>
            </tr>
            </thead>
            <tbody>
            @foreach ($category as $i)
                <tr>
                    <td>{{ $i['id'] }}</td>
                    <td>{{ $i['name'] }}</td>
                    <td>
                        <div class="d-inline-flex">
                            <a href="{{ url('admin/portfolio/categories/' . $i['id']) }}" class="btn btn-warning btn-sm me-2">Edit</a>
                            <form method="post" action="{{ url('admin/portfolio/categories/' . $i['id']) }}">
                                @csrf
                                @method('delete')
                                <button type="submit" class="btn btn-danger btn-sm">Delete</button>
                            </form>
                        </div>
                    </td>
                </tr>
            @endforeach
            </tbody>
        </table>
        <h2>Create new category</h2>
        <form method="post" action="{{ url('admin/portfolio/categories') }}">
            @csrf
            <div class="mb-2">
                <label for="formName">Name</label>
                <input type="text" name="name" id="formName" class="form-control form-control-sm" required/>
            </div>
            <div class="text-end mt-4 pb-5">
                <button type="submit" class="btn btn-success">Create new category</button>
            </div>
        </form>
    </div>
@stop
