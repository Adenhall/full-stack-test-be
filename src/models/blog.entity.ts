import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'blog' })
export class Blog extends BaseEntity {
  @Column({ type: 'varchar', length: 300 })
  src: string;

  @Column({ type: 'varchar', length: 300 })
  alt: string;

  @Column({ type: 'varchar', length: 300 })
  heading: string;

  @Column({ type: 'varchar' })
  content: string;
}
