<!-- SPDX-FileCopyrightText: Copyright (c) 2022-2024 trobonox <hello@trobo.dev> -->
<!-- -->
<!-- SPDX-License-Identifier: CC0-1.0 -->

<template>
    <div>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<script setup>
import { appWindow } from '@tauri-apps/api/window';

onMounted(() => {
    setTimeout(() => {
        appWindow.show();
    }, 50);
})
</script>
