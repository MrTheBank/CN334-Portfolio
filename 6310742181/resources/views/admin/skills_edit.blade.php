@extends('layouts.admin')

@section('title', 'Edit skill #' . $skills['id'])

@section('content')
    <div class="container pt-5">
        <h1>Edit skill #{{ $skills['id'] }}</h1>
        <form method="post">
            @csrf
            <div class="mb-2">
                <label htmlFor="formName">Skill Name</label>
                <input type="text" name="name" id="formName" value="{{ $skills['name'] }}" class="form-control" required/>
            </div>
            <div class="mb-2">
                <label htmlFor="formPercentage">Skill Percentage</label>
                <input type="number" name="percentage" id="formPercentage" min="0" max="100" step="1" value="{{ $skills['percentage'] }}" class="form-control" required/>
            </div>
            <div class="text-end mt-4">
                <button type="submit" class="btn btn-success">Save</button>
            </div>
        </form>
    </div>
@stop
