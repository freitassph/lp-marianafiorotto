#!/usr/bin/env node

/**
 * Script de Conversão PNG → JPG de Alta Qualidade
 *
 * Converte imagens PNG grandes para JPG otimizado mantendo qualidade visual excelente.
 * Usa Sharp com configurações otimizadas: mozjpeg, progressive, 85% qualidade.
 */

const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const conversions = [
  {
    input: 'public/assets/images/hero/dra-mariana-nova.png',
    output: 'public/assets/images/hero/dra-mariana-hero.jpg',
    description: 'Hero image'
  },
  {
    input: 'public/assets/images/about/19BD0F18-CA19-45C1-949F-318C45C5D502.png',
    output: 'public/assets/images/about/dra-mariana-about.jpg',
    description: 'About image'
  }
];

async function convertImage(config) {
  const { input, output, description } = config;

  console.log(`\n🔄 Convertendo ${description}...`);
  console.log(`   Input:  ${input}`);
  console.log(`   Output: ${output}`);

  try {
    // Verificar se arquivo de entrada existe
    if (!fs.existsSync(input)) {
      console.error(`   ❌ Arquivo não encontrado: ${input}`);
      return false;
    }

    // Obter tamanho original
    const inputStats = fs.statSync(input);
    const inputSizeKB = (inputStats.size / 1024).toFixed(2);

    // Converter com Sharp
    await sharp(input)
      .jpeg({
        quality: 85,           // 85% qualidade - sweet spot performance/qualidade
        progressive: true,     // Progressive JPG - carrega gradualmente
        mozjpeg: true,        // Usar mozjpeg para melhor compressão
        chromaSubsampling: '4:2:0' // Subsampling padrão para web
      })
      .toFile(output);

    // Obter tamanho convertido
    const outputStats = fs.statSync(output);
    const outputSizeKB = (outputStats.size / 1024).toFixed(2);
    const reduction = (((inputStats.size - outputStats.size) / inputStats.size) * 100).toFixed(1);

    console.log(`   ✅ Convertido com sucesso!`);
    console.log(`   📊 ${inputSizeKB}KB → ${outputSizeKB}KB (${reduction}% menor)`);

    return true;
  } catch (error) {
    console.error(`   ❌ Erro ao converter: ${error.message}`);
    return false;
  }
}

async function main() {
  console.log('🎨 Iniciando conversão de imagens para JPG de alta qualidade...\n');
  console.log('⚙️  Configuração: 85% qualidade, progressive, mozjpeg\n');

  let totalInputSize = 0;
  let totalOutputSize = 0;
  let successCount = 0;

  for (const config of conversions) {
    const success = await convertImage(config);

    if (success) {
      successCount++;
      const inputStats = fs.statSync(config.input);
      const outputStats = fs.statSync(config.output);
      totalInputSize += inputStats.size;
      totalOutputSize += outputStats.size;
    }
  }

  // Resumo final
  console.log('\n' + '='.repeat(60));
  console.log('📊 RESUMO DA CONVERSÃO');
  console.log('='.repeat(60));
  console.log(`✅ Sucesso: ${successCount}/${conversions.length} imagens`);

  if (totalInputSize > 0) {
    const totalInputMB = (totalInputSize / 1024 / 1024).toFixed(2);
    const totalOutputMB = (totalOutputSize / 1024 / 1024).toFixed(2);
    const totalReduction = (((totalInputSize - totalOutputSize) / totalInputSize) * 100).toFixed(1);

    console.log(`📦 Tamanho total antes: ${totalInputMB}MB`);
    console.log(`📦 Tamanho total depois: ${totalOutputMB}MB`);
    console.log(`🎉 Redução total: ${totalReduction}%`);
    console.log(`💾 Economia: ${((totalInputSize - totalOutputSize) / 1024 / 1024).toFixed(2)}MB`);
  }

  console.log('='.repeat(60));

  if (successCount === conversions.length) {
    console.log('\n✅ Todas as imagens foram convertidas com sucesso!');
    console.log('🚀 Próximo passo: Atualizar referências no HTML\n');
    process.exit(0);
  } else {
    console.error('\n⚠️  Algumas conversões falharam. Verifique os erros acima.\n');
    process.exit(1);
  }
}

main();
