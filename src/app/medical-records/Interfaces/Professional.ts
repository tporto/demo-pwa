/**
 * Record of the professional who carried out the medical record
 *
 * @export
 * @interface MedicalRecordProfessional
 */
export interface MedicalRecordProfessional {
  id: number;
  name: string;
  especialidade?: MedicalRecordProfessionalSpecialty[];
}

/**
 * Professional specialty record
 *
 * @export
 * @interface MedicalRecordProfessionalSpecialty
 */
export interface MedicalRecordProfessionalSpecialty {
  codesp: number;
  cod_prof: number;
  descri: string;
}
