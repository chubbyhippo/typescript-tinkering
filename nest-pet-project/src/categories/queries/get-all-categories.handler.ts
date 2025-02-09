import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetAllCategoriesQuery } from "./get-all-categories.query";
import { InjectRepository } from "@nestjs/typeorm";
import { CategoryEntity } from "../category.entity";
import { Repository } from "typeorm";

@QueryHandler(GetAllCategoriesQuery)
export class GetAllCategoriesHandler implements IQueryHandler<GetAllCategoriesQuery>{
    constructor(
        @InjectRepository(CategoryEntity)
        private readonly categoryRepository: Repository<CategoryEntity>,
    ){}

    execute(_query: GetAllCategoriesQuery): Promise<CategoryEntity[]> {
        return this.categoryRepository.find({relations: ['pets']});
    }

}
