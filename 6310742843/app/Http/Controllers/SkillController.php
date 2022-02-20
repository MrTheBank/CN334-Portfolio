<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Skill;

class SkillController extends Controller
{
    public function skills() {
        $skills = Skill::select('id', 'name', 'percentage')->orderBy('id', 'asc')->get();

        return view('admin.skills', compact('skills'));
    }

    public function skillsCreate(Request $request) {
        $validated = $request->validate([
            'name' => 'required',
            'percentage' => 'required|min:0|max:100',
        ]);

        Skill::create([
            'name' => $request->name,
            'percentage' => $request->percentage,
        ]);

        return redirect()->back();
    }

    public function skillsEdit(int $id) {
        $skills = Skill::select('id', 'name', 'percentage')->orderBy('id', 'asc')->where('id', '=', $id)->first();

        return view('admin.skills_edit', compact('skills'));
    }

    public function skillsEditSubmit(int $id, Request $request) {
        $validated = $request->validate([
            'name' => 'required',
            'percentage' => 'required|min:0|max:100',
        ]);

        Skill::where('id', '=', $id)->update([
            'name' => $request->name,
            'percentage' => $request->percentage,
        ]);

        return redirect('/admin/skills');
    }

    public function skillsDelete(int $id) {
        Skill::where('id', '=', $id)->delete();

        return redirect()->back();
    }
}
