import { Entity, Column, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "video_profile" })
export class VideoProfile {
  @PrimaryColumn()
  video_link!: String;
  @Column({ nullable: true })
  video_id!: String;
  @Column({ nullable: true })
  title!: String;
  @Column({ nullable: true })
  date!: String;
  @Column({ nullable: true })
  director!: String;
  @Column({ nullable: true })
  director_link!: String;
  @Column({ nullable: true })
  maker!: String;
  @Column({ nullable: true })
  maker_link!: String;
  @Column({ nullable: true })
  label!: String;
  @Column({ nullable: true })
  label_link!: String;
  @Column({ nullable: true })
  video_genres!: String;
  @Column({ nullable: true })
  video_casts!: String;
  @Column({ nullable: true })
  cast_number!: Number;
  @Column({ nullable: true })
  is_omnibus!: Boolean;
  // @Column({ nullable: true })
  // html!: String;
  @Column({ nullable: true })
  length!: String;
  @Column({ nullable: true })
  img_url!: String;
  @Column({ nullable: true })
  got_it!: Boolean;
  @UpdateDateColumn({ nullable: true })
  update_time!: String;
  @Column({ nullable: true })
  video_score!: String;
}
