import {
  Injectable,
  NotFoundException,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';
import { Ring } from './models/interface/ring.interface';
import { RingRepository } from './repository/ring.repository';
import { CreateRingDto } from './models/dto/create-ring.dto';
import { UpdateRingDto } from './models/dto/update-ring.dto';
import { RingType } from './enum/ring.enum';

@Injectable()
export class RingService {
  private readonly maxQuantities = {
    [RingType.DWARF]: 7,
    [RingType.HUMAN]: 9,
    [RingType.SAURON]: 1,
    [RingType.ELF]: 3,
  };

  constructor(private readonly ringRepository: RingRepository) {}

  async create(createRingDto: CreateRingDto): Promise<Ring> {
    const existingRings = await this.ringRepository.findAll();

    // Checa se já existe um anel com o mesmo nome
    if (existingRings.some((ring) => ring.name === createRingDto.name)) {
      throw new ConflictException(
        `Ring with this name "${createRingDto.name}" already exists`,
      );
    }

    // Conta o número de anéis existentes do tipo atual
    const countByType = existingRings.filter(
      (ring) => ring.type === createRingDto.type,
    ).length;

    // Verifica se o limite foi atingido
    if (countByType >= this.maxQuantities[createRingDto.type]) {
      throw new BadRequestException(
        `Cannot create more rings of type "${createRingDto.type}". Limit of ${this.maxQuantities[createRingDto.type]} reached.`,
      );
    }

    return this.ringRepository.create(createRingDto);
  }

  async findAll(): Promise<Ring[]> {
    return this.ringRepository.findAll();
  }

  async findOne(id: string): Promise<Ring> {
    const ring = await this.ringRepository.findById(id);
    if (!ring) {
      throw new NotFoundException(`Ring with id ${id} not found`);
    }
    return ring;
  }

  async update(id: string, updateRingDto: UpdateRingDto): Promise<Ring> {
    const currentRing = await this.findOne(id); // Verifica se o anel atual existe

    // Se o tipo de anel estiver sendo alterado, verifica o limite
    if (updateRingDto.type && updateRingDto.type !== currentRing.type) {
      const existingRings = await this.ringRepository.findAll();
      const countByNewType = existingRings.filter(
        (ring) => ring.type === updateRingDto.type,
      ).length;

      // Verifica se o novo tipo já atingiu o limite
      if (countByNewType >= this.maxQuantities[updateRingDto.type]) {
        throw new BadRequestException(
          `Cannot update ring to type "${updateRingDto.type}". Limit of ${this.maxQuantities[updateRingDto.type]} reached.`,
        );
      }
    }

    // Atualiza o anel
    return this.ringRepository.update(id, updateRingDto);
  }

  async remove(id: string): Promise<void> {
    await this.findOne(id);
    return this.ringRepository.delete(id);
  }
}
