<!DOCTYPE html>
<html>
<head>
    <title>Registro Persona</title>
</head>
<body>

<h2>Registrar Persona</h2>

<form method="POST" action="/persona">

    @csrf

    <label>Nombres:</label>
    <input type="text" name="nombres"><br><br>

    <label>Apellidos:</label>
    <input type="text" name="apellidos"><br><br>

    <label>Correo:</label>
    <input type="email" name="correo"><br><br>

    <label>Sexo:</label>
    <select name="sexo">
        <option value="M">Masculino</option>
        <option value="F">Femenino</option>
    </select>

    <br><br>

    <button type="submit">Registrar</button>

</form>

</body>
</html>