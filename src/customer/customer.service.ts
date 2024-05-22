import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer.name) private customerModel: Model<Customer>,
  ) {}
  async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
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
