<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function auth() {
        return view('admin.auth');
    }

    public function authProcess(Request $request) {
        $validated = $request->validate([
            'password' => 'required',
        ]);

        if ($request->password === config('app.admin_password')) {
            $request->session()->put('authorized', true);
            return redirect('/admin');
        } else {
            return redirect()->back()->withErrors(['msg' => 'The password is incorrect. Try again.']);
        }
    }
}
