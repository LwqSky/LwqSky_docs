<template>
  <div class="m-nav-layout">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.m-nav-layout {
  /* 覆盖全局的 vp-layout-max-width（仅当前页面使用） */
  :deep(.container) {
    max-width: 1660px !important;
  }
  
  :deep(.content-container),
  :deep(.content) {
    max-width: 100% !important;
  }

  /* aside 样式 */
  :deep(.aside) {
    padding-left: 0;
    max-width: 224px;
  }

  /* custom-block */
  :deep(.custom-block) {
    .custom-block-title {
      font-size: var(--vp-custom-block-font-size);
    }
    ul {
      margin: 8px 0;
    }
    li {
      margin: 0;
    }
  }

  :deep(.vp-doc h2) {
    margin-top: 24px;
  }
}
</style> 