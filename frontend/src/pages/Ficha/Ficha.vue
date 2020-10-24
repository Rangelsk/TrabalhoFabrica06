<template>
  <div class="ficha">
    <b-container class="bv-example-row">
      <b-row>
          <b-col cols="2"><label>Nome: </label></b-col>
          <b-col cols="10"><input type="text" id="nome" name="nome"></b-col>
      </b-row>
      <b-row>
          <b-col cols="2"><label>Raça: </label></b-col>
          <b-col cols="10"><input type="text" id="raca" name="raca"></b-col>
      </b-row>
      <b-row>
          <b-col cols="2"><label>Idade: </label></b-col>
          <b-col cols="10"><input type="text" id="idade" name="idade"></b-col>
      </b-row>
      <b-row>
          <b-col cols="2"><label>Classe: </label></b-col>
          <b-col cols="10"><input type="text" id="classe" name="classe"></b-col>
      </b-row>
      <b-row>
        <div style="margin 0;">
          <label style="float: left;margin-left:50px">História: </label>
          <br>
          <textarea style="width:1000px" type="text" id="historia" name="historia"></textarea>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Ficha',
  created: function(){
    console.log(axios);
  }
}
</script>