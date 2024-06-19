import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EncryptionService } from 'src/common/security/encryption.service';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer.name) private customerModel: Model<Customer>,
    private readonly encryptService: EncryptionService,
  ) {}
  async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    console.log(createCustomerDto.password);
    createCustomerDto.password = await this.encryptService.EncrypAsync(
      createCustomerDto.password,
    );
    const createCustomer = new this.customerModel(createCustomerDto);
    return await createCustomer.save();
  }

  async findAll(): Promise<Array<Customer>> {
    return await this.customerModel.find();
  }

  async findOne(id: string): Promise<Customer> {
    return await this.customerModel.findById(id);
  }

  async update(id: string, updateCustomerDto: UpdateCustomerDto) {
    return await this.customerModel.updateOne({
      where: {
        _id: id,
      },
      updateCustomerDto,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
