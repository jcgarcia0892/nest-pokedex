import { CommonModule } from './../common/common.module';
import { PokemonModule } from './../pokemon/pokemon.module';
import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';

@Module({
  controllers: [SeedController],
  imports: [PokemonModule, CommonModule],
  providers: [SeedService],
})
export class SeedModule {}
