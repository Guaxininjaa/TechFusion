<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TechFusion | Dashboard</title>

    <link rel="stylesheet" href="dashboard.css">
</head>

<body>

<header>

    <h1>TechFusion</h1>

    <span>Bem-vindo, Admin</span>

</header>

<nav>

    <a href="#">Início</a>
    <a href="#">Produtos</a>
    <a href="#">Clientes</a>
    <a href="#">Ordens de Serviço</a>

    <button id="btn-sair">Sair</button>

</nav>

<main>

    <h2>Últimas Ordens de Serviço</h2>

    <input type="text" placeholder="Pesquisar...">

    <table>

        <thead>

            <tr>
                <th>Nº OS</th>
                <th>Cliente</th>
                <th>Aparelho</th>
                <th>Status</th>
                <th>Ações</th>
            </tr>

        </thead>

        <tbody>

            <tr>
                <td>102</td>
                <td>João Silva</td>
                <td>iPhone 11</td>
                <td>Em análise</td>
                <td><button>Visualizar</button></td>
            </tr>

            <tr>
                <td>101</td>
                <td>Maria Oliveira</td>
                <td>Notebook Dell</td>
                <td>Aguardando peça</td>
                <td><button>Visualizar</button></td>
            </tr>

            <tr>
                <td>100</td>
                <td>Carlos Mendes</td>
                <td>Samsung S22</td>
                <td>Pronto</td>
                <td><button>Visualizar</button></td>
            </tr>

        </tbody>

    </table>

</main>

<script src="dashboard.js"></script>

</body>
</html>