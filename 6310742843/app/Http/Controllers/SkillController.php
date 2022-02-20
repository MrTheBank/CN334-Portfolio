<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Skill;

class SkillController extends Controller
{
    public function skills() {
        $skills = Skill::select('id', 'name', 'description')->orderBy('id', 'asc')->get();

        return view('admin.skills', compact('skills'));
    }

    public function skillsCreate(Request $request) {
        $validated = $request->validate([
            'name' => 'required',
            'description' => 'required',
        ]);

        Skill::create([
            'name' => $request->name,
            'description' => $request->description,
        ]);

        return redirect()->back();
    }

    public function skillsEdit(int $id) {
        $skills = Skill::select('id', 'name', 'description')->orderBy('id', 'asc')->where('id', '=', $id)->first();

        return view('admin.skills_edit', compact('skills'));
    }

    public function skillsEditSubmit(int $id, Request $request) {
        $validated = $request->validate([
            'name' => 'required',
            'description' => 'required',
        ]);

        Skill::where('id', '=', $id)->update([
            'name' => $request->name,
            'description' => $request->description,
        ]);

        return redirect('/admin/skills');
    }

    public function skillsDelete(int $id) {
        Skill::where('id', '=', $id)->delete();

        return redirect()->back();
    }
}
