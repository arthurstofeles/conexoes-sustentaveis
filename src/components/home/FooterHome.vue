<template>
  <div class="footer">
    Uma Startup da
    <img src="@/assets/eletrobas.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "FooterHome",
};
</script>

<style lang="scss" scoped>
.footer {
  max-width: 1312px;
  width: 100%;
  background: rgb(38, 40, 39);
  padding: 32px;
  margin: 0 auto;
  margin-top: 64px;
  color: #fff;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 16px;
}
</style>
