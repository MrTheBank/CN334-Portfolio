@extends('layouts.admin')

@section('title', 'Skills')

@section('content')
    <div class="container pt-5">
        <h1>Skills</h1>
        <table class="table table-bordered text-white">
            <thead class="table-light">
            <tr>
                <th scope="col" style="width: 5%">#</th>
                <th scope="col" style="width: 60%">Skill Name</th>
                <th scope="col" style="width: 15%">Percentage</th>
                <th scope="col" style="width: 20%">Action</th>
            </tr>
            </thead>
            <tbody>
                @foreach ($skills as $i)
                    <tr>
                        <td>{{ $i['id'] }}</td>
                        <td>{{ $i['name'] }}</td>
                        <td>{{ $i['percentage'] }}</td>
                        <td>
                            <div class="d-inline-flex">
                                <a href="{{ url('admin/skills/' . $i['id']) }}" class="btn btn-warning btn-sm me-2">Edit</a>
                                <form method="post" action="{{ url('admin/skills/' . $i['id']) }}">
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
        <h1>Create new skill</h1>
        <form method="post">
            @csrf
            <div class="mb-2">
                <label htmlFor="formName">Skill Name</label>
                <input type="text" name="name" id="formName" class="form-control" required/>
            </div>
            <div class="mb-2">
                <label htmlFor="formPercentage">Skill Percentage</label>
                <input type="number" name="percentage" id="formPercentage" min="0" max="100" step="1" class="form-control" required/>
            </div>
            <div class="text-end mt-4">
                <button type="submit" class="btn btn-success">Create new skill</button>
            </div>
        </form>
    </div>
@stop
