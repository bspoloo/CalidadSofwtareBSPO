<?php

namespace App\Http\Controllers;

use App\Models\Person;
use Illuminate\Http\Request;

class PersonController extends Controller
{
    public function create()
    {
        return view('persona_form');
    }

    public function store(Request $request)
    {
        Person::create([
            'nombres' => $request->nombres,
            'apellidos' => $request->apellidos,
            'correo' => $request->correo,
            'sexo' => $request->sexo
        ]);

        return response()->json([
            'message' => 'Persona creada'
        ], 201);
    }
}
