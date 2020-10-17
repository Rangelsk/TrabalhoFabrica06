<template>
  <div class="ficha">
    <label>Nome: </label>
    <input type="text" id="nome" name="nome">
    <br>
    <label>Raça: </label>
    <input type="text" id="raca" name="raca">
    <br>
    <label>Idade: </label>
    <input type="text" id="idade" name="idade">
    <br>
    <label>Classe: </label>
    <input type="text" id="classe" name="classe">
    <br>
    <div style="margin 0;">
      <label style="float: left;margin-left:50px">História: </label>
      <br>
      <textarea  style="width: 95%;margin 0;" type="text" id="historia" name="historia"></textarea>
    </div>
    <b-container class="bv-example-row">
  <b-row>
    <b-col>1 of 2</b-col>
    <b-col>2 of 2</b-col>
  </b-row>

  <b-row>
    <b-col>1 of 3</b-col>
    <b-col>2 of 3</b-col>
    <b-col>3 of 3</b-col>
  </b-row>
</b-container>
  </div>
</template>
