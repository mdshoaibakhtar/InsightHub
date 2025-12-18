export interface IApplicationDetails {
  installation_state: string;
  application_type: string;
  partner_name: string;
  name: string;
  installation_address: string;
  created_date: string;
  applicant_phone: string;
  applicant_name: string;
  monthly_payment: string;
  final_system_size_kw_ac: string;
  final_system_size_kw_dc: string;
  pto_date: string;
  parent_document_category_id: string;
}

export interface IContractDetails {
  internal_dca_review: string | null;
  active_status: boolean;
  estimated_avoided_cost_of_power: string;
  epc_payment_per_watt: string;
  parent_application: string;
  id: string;
  app_no: string;
  battery_mode: string;
}

export interface IApplicationStatus {
  status: string;
}

export interface IFileNode {
  name: string;
  type: 'file' | 'folder';
  size?: string;
  url?: string;
  children?: IFileNode[];
  parent_category?: boolean;
  last_modified?: string;
  status?: string;
  id?: string;
  active?: boolean;
  uploaded_by?: string;
  parent?: IFileNode;
}

export interface IDocumentSelection {
  children: IFileNode[];
  index: number;
  node: IFileNode;
}

export interface ITreeNodeProps {
  node: IFileNode;
  level?: number;
  path?: string;
  selected: string | null;
  onSelect: (path: string, documentData?: IDocumentSelection) => void;
  parentNode?: IFileNode;
  isOpenFiles?: boolean;
  handleSubmit: (actionType: 'approve' | 'reject', nodeId: string) => void;
  applicationAssigneeId: string;
  submittingNodeId?: string;
  isSubmitting?: boolean;
  submittingAction?: 'approve' | 'reject' | '';
  updatedNodes?: Record<string, string>;
  applicationPortalStatus?: string;
  milestone?: IFileNode;
}

export interface IApplicationFileTreeProps {
  applicationDocument?: IFileNode;
  isLoading?: boolean;
  applicationId: string;
  applicationAssigneeId: string;
  onDocumentValidationChange?: (areAllApproved: boolean) => void;
  applicationPortalStatus?: string;
  onDocumentSelect?: (documentData: IDocumentSelection | null) => void;
}

export interface IEquipmentDetail {
  pv_panel_count: string;
  dc_optimizer_manufacturer: string;
  racking_manufacturer: string;
  battery_serial_number: string;
  equipment_type: string;
  racking_mounting_splice: string;
  ess_operational_mode: string;
  id: string;
  microinverter_model: string;
  pv_panel_model: string;
  dc_optimizer_model: string;
  equipment_name: string;
  confidence_score_reason: string;
  battery_registration_number: string;
  battery_count: string;
  pv_panel_array_group: string;
  pv_panel_serial_number: string | null;
  battery_manufacturer: string;
  microinverter_count: string;
  microinverter_registration_number: string;
  microinverter_serial_number: string;
  dc_optimizer_count: string;
  dc_optimizer_serial_number: string;
  confidence_score: string;
  name: string;
  microinverter_manufacturer: string;
  racking_mounting_rail_model: string;
  pv_panel_manufacturer: string;
  battery_model: string;
}

export interface IEquipmentDetailProposal {
  pv_panel_count: string;
  battery_compatibility: string;
  battery_serial_number: string;
  pv_panel_azimuth_deg: string;
  equipment_type: string;
  pv_panel_solar_access: string;
  inverter_component_type: string;
  pv_panel_tilt_deg: string;
  ess_operational_mode: string;
  panel_solar_monthly_access_12_digit: string;
  id: string;
  microinverter_model: string;
  inverter_storage_configured: string;
  pv_panel_model: string;
  equipment_name: string;
  pv_panel_orientation: string;
  battery_registration_number: string;
  battery_count: string;
  pv_panel_array_group: string;
  battery_manufacturer: string;
  pv_panel_module_type: string | null;
  pv_panel_annual_tof: string;
  microinverter_registration_number: string;
  microinverter_serial_number: string;
  name: string;
  microinverter_manufacturer: string;
  pv_panel_annual_tsfr: string;
  pv_panel_manufacturer: string;
  battery_model: string;
}

export interface IActualEquipmentDetailFields {
  FinalSystemSizekWdc: string;
  FinalSystemSizeAsBuiltkWAc: string;
  installationDate: string;
}

export interface IApplicationInformationProps {
  applicationData: IApplicationDetails;
  isLoading: boolean;
  applicationStatus: string;
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  actionName: string;
  setActionName: (value: string) => void;
  internalNotes: string;
  setInternalNotes: (value: string) => void;
  externalNotes: string;
  setExternalNotes: (value: string) => void;
  onModalSubmit: (internalNotes?: string, externalNotes?: string) => void;
  validateForm: () => Promise<boolean>;
  isSubmitting: boolean;
  applicationAssigneeId: string;
  applicationPortalStatus: string;
  setIsConditionalModalOpen: (value: boolean) => void;
  isConditionalModalOpen: boolean;
  areAllDocumentCatApproved: boolean;
}

export interface INotesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (internalNotes?: string, externalNotes?: string) => void;
  actionName?: string;
  internalNotes: string;
  externalNotes: string;
  setInternalNotes: (value: string) => void;
  setExternalNotes: (value: string) => void;
  isSubmitting: boolean;
}

export interface IConditionalApprovalFormData {
  reasons: string[];
  note: string;
}

export interface IRejectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  comment: string;
  setComment: (comment: string) => void;
  isSubmitting: boolean;
}

export interface IStatusBadgeProps {
  status: never;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'outline';
}

export interface IDocumentViewerProps {
  documentData: IDocumentSelection | null;
  documentIsLoading: boolean;
}
