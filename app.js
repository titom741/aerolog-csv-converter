const STORAGE_KEY = "aerolog_csv_converter_language";
const APP_VERSION = "2026.07.08.1";
const RTL_LANGUAGES = new Set(["ar"]);

const LANGUAGE_OPTIONS = [
  { code: "en", label: "🇬🇧 English" },
  { code: "fr", label: "🇫🇷 Français" },
  { code: "es", label: "🇪🇸 Español" },
  { code: "de", label: "🇩🇪 Deutsch" },
  { code: "it", label: "🇮🇹 Italiano" },
  { code: "pt", label: "🇵🇹 Português" },
  { code: "nl", label: "🇳🇱 Nederlands" },
  { code: "pl", label: "🇵🇱 Polski" },
  { code: "tr", label: "🇹🇷 Türkçe" },
  { code: "ru", label: "🇷🇺 Русский" },
  { code: "ar", label: "🇸🇦 العربية" },
  { code: "hi", label: "🇮🇳 हिन्दी" },
  { code: "zh", label: "🇨🇳 简体中文" },
  { code: "ja", label: "🇯🇵 日本語" },
  { code: "ko", label: "🇰🇷 한국어" }
];

const TRANSLATIONS = {
  en: {
    page_title: "AeroLog CSV Converter",
    page_title_file: "AeroLog CSV/XLSX Converter",
    eyebrow: "AeroLog Import Tools",
    version_label: "Version",
    language_label: "Language",
    hero_title_html: "CSV to <code>Flights.json</code>, <code>Pilots.json</code>, and <code>Aircrafts.json</code>",
    hero_copy: "This page reads a single CSV file, automatically detects known columns, validates the minimum required fields, and generates the three JSON files expected by the app.",
    hero_title_file_html: "CSV/XLSX to <code>Flights.json</code>, <code>Pilots.json</code>, and <code>Aircrafts.json</code>",
    hero_copy_file: "This page reads a single CSV or XLSX file, automatically detects known columns, validates the minimum required fields, and generates the three JSON files expected by the app.",
    hero_why_title: "Why this page exists",
    hero_why_copy: "CSV exports often use labels that do not match the app. This tool helps normalize them before import so the generated JSON stays usable.",
    hero_how_title: "How to use it",
    hero_how_copy: "Load a CSV, drag the expected labels onto the right columns, fix orange or red signals, then download the three JSON files.",
    hero_how_copy_file: "Load a CSV or XLSX file, drag the expected labels onto the right columns, fix orange or red signals, then download the three JSON files.",
    hero_minimums_title: "Minimum fields",
    hero_minimums_copy_html: "<strong>Flight</strong>: date, registration, pilot 1, and total aircraft or simulator time.<br><strong>Aircraft</strong>: manufacturer and model.<br><strong>Route</strong>: departure and arrival for non-simulator rows.",
    choose_csv: "Choose a CSV",
    choose_file: "Choose a CSV or XLSX",
    download_csv_template: "Download CSV template",
    download_xlsx_template: "Download XLSX template",
    output_filenames_html: "Output filenames are always set to <code>Flights.json</code>, <code>Pilots.json</code>, and <code>Aircrafts.json</code>.",
    template_hint_html: "In the CSV template, required headers start with <code>*</code>. In the XLSX template, required headers are bold.",
    default_settings_title: "Default settings",
    default_settings_copy: "Used when the CSV does not provide some aircraft details.",
    default_type_label: "Default type",
    default_class_label: "Default class",
    default_engine_type_label: "Default engine type",
    default_aircraft_company_label: "Default aircraft company",
    default_pilot_company_label: "Default pilot company",
    optional_placeholder: "Optional",
    tip_html: "Tip: keep <code>Aircraft</code>, <code>AP</code>, and an engine type that matches your fleet if the CSV does not include these columns.",
    minimum_required_fields_title: "Minimum required fields",
    minimum_required_fields_copy: "The converter accepts column aliases, but it still needs at least:",
    constraint_flight_html: "<strong>Flight</strong>: date, registration, pilot 1, and total aircraft or simulator time.",
    constraint_route_html: "<strong>Route</strong>: departure and arrival if the row is not a simulator session.",
    constraint_aircraft_html: "<strong>Aircraft</strong>: registration, manufacturer, and model.",
    constraint_pilot_html: "<strong>Pilot</strong>: a last name for every pilot provided.",
    airport_codes_helper: "Airport codes are kept as-is in the JSON, but the app will only import flights if those codes already exist in its airport database.",
    result_title: "Result",
    status_no_file: "No file loaded.",
    summary_rows: "CSV Rows",
    summary_flights: "Flights",
    summary_pilots: "Pilots",
    summary_aircrafts: "Aircrafts",
    summary_errors: "Errors",
    summary_warnings: "Warnings",
    download_flights: "Download Flights.json",
    download_pilots: "Download Pilots.json",
    download_aircrafts: "Download Aircrafts.json",
    header_overrides_title: "CSV header editor",
    header_overrides_title_file: "CSV/XLSX header editor",
    header_overrides_copy: "Drag an expected label onto a column to rename it automatically, or edit it manually. You can also add or remove headers.",
    header_overrides_copy_file: "Drag an expected label onto a CSV or XLSX column to rename it automatically, or edit it manually. You can also add or remove headers.",
    header_overrides_add: "Add a header",
    header_overrides_reset: "Reset renaming",
    expected_fields_copy: "Drag one of the expected labels below onto a CSV column.",
    legend_validated: "Green: validated label",
    legend_optional: "Blue: optional recognized label",
    legend_unrecognized: "Orange: unrecognized column to review",
    legend_error: "Red: blocking issue to fix",
    editor_metric_validated: "Validated",
    editor_metric_unrecognized: "Unrecognized",
    editor_metric_missing: "Missing required",
    editor_metric_errors: "Blocking errors",
    editor_metric_warnings: "Warnings",
    editor_missing_required_title: "Missing required labels",
    problematic_rows_title: "Problematic rows",
    problematic_rows_empty: "No row-level issue detected.",
    problematic_row_heading: "Line {lineNumber}",
    blocking_errors_row_issues: "{count} issue(s) on this line",
    problematic_row_hint: "Fields marked with * are required.",
    problematic_row_save: "Validate changes",
    problematic_row_delete: "Delete line",
    problematic_row_no_fields: "No editable field detected for this line.",
    problematic_row_close: "Close editor",
    header_original_column: "Original column",
    header_rename_to: "Rename to",
    header_editor_action: "Action",
    header_detected_target: "Recognition",
    header_overrides_placeholder: "Load a CSV to edit column names.",
    header_overrides_placeholder_file: "Load a CSV or XLSX file to edit column names.",
    header_manual_column: "Manual header",
    header_default_value_label: "Default value",
    header_default_value_placeholder: "Applied to every row",
    header_default_value_missing: "Add a default value to populate every row.",
    header_derived_column: "Derived column",
    header_derived_from: "Extracted from {original}",
    header_derived_sample: "Sample value: {value}",
    header_auto_split_time: "Embedded time detected: creates {header}.",
    header_remove: "Remove",
    header_restore: "Restore",
    header_delete: "Delete",
    header_removed: "Removed",
    header_status_validated: "Validated",
    header_status_optional: "Optional match",
    header_status_unrecognized: "Needs review",
    header_status_removed: "Ignored",
    untitled_header: "Untitled column #{index}",
    header_match_none: "Not matched yet",
    header_renamed_from: "from {original}",
    header_override_duplicate_error: "Two or more columns now use the same final name: {headers}. Give each column a unique final name.",
    mapping_title: "Column mapping",
    mapping_copy: "Columns automatically recognized in the loaded CSV.",
    mapping_target_field: "Target field",
    mapping_detected_column: "Detected column",
    mapping_status: "Status",
    mapping_placeholder: "Load a CSV to see the detected mapping.",
    unused_columns_title: "Unrecognized columns",
    unused_columns_copy: "Useful for spotting unexpected column names or typos.",
    unused_columns_placeholder: "No columns to display.",
    blocking_errors_title: "Blocking errors",
    blocking_errors_copy: "These issues prevent the JSON files from being generated.",
    errors_placeholder: "No errors yet.",
    warnings_title: "Warnings",
    warnings_copy: "Useful information that does not block generation.",
    warnings_placeholder: "No warnings yet.",
    preview_title: "JSON preview",
    preview_copy: "First item from each generated file.",
    editor_missing_required_empty: "All required labels are available.",
    status_detected: "Detected",
    status_missing: "Missing",
    status_optional: "Optional",
    mapping_not_detected: "not detected",
    mapping_no_data: "No data.",
    unused_all_recognized: "All columns were recognized or intentionally ignored.",
    fatal_unable_analyze: "Unable to analyze the CSV.",
    no_errors: "No errors.",
    no_warnings: "No warnings.",
    unknown_error_csv: "Unknown error while reading the CSV.",
    csv_empty: "The CSV file is empty.",
    xlsx_parse_error: "Unable to read the XLSX file.",
    xlsx_missing_sheet: "No worksheet was found in this XLSX file.",
    loaded_file_fallback: "the loaded file",
    error_missing_date_column: "Date column not found. Add something like `date`, `flight_date`, or `pilotlog_date`.",
    error_missing_registration_column: "Registration column not found. Add something like `registration`, `tail`, or `ac_reg`.",
    error_missing_pilot1_column: "Pilot 1 column not found. Add something like `pilot1_last_name`, `pilot1_name`, `captain`, or `name`.",
    error_missing_manufacturer_column: "Aircraft manufacturer column not found. Add something like `manufact`, `manufacturer`, or `aircraft_manufact`.",
    error_missing_model_column: "Aircraft model column not found. Add something like `model`, `aircraft_model`, or `modele`.",
    error_missing_total_time_column: "No total time column was detected. Add `time_total_aircraft`, `time_total_simulator`, `time_total`, `flight_time`, or `Blk Hrs`.",
    row_missing_registration: "Row {lineNumber}: missing registration.",
    row_missing_manufacturer: "Row {lineNumber}: missing aircraft manufacturer for {registration}.",
    row_missing_model: "Row {lineNumber}: missing aircraft model for {registration}.",
    row_invalid_date: "Row {lineNumber}: invalid or empty date.",
    row_invalid_total_time: "Row {lineNumber}: invalid or missing total time.",
    row_invalid_times: "Row {lineNumber}: invalid departure or arrival time.",
    row_missing_departure_airport: "Row {lineNumber}: missing departure airport.",
    row_missing_arrival_airport: "Row {lineNumber}: missing arrival airport.",
    row_role_missing_last_name: "Row {lineNumber}: {role} is provided without a last name.",
    row_pilot1_required: "Row {lineNumber}: pilot 1 is required.",
    warning_conflicting_pilot_field: "Row {lineNumber}: conflicting {role} value for {field}; keeping the first value for {lastName}.",
    warning_conflicting_aircraft_field: "Row {lineNumber}: conflicting aircraft value for {field} on {registration}; keeping the first value.",
    status_blocked: "Conversion blocked for {fileName}: {errorCount} issue(s) must be fixed before export.",
    status_ready_warnings: "Conversion ready with {warningCount} warning(s). Review them before importing into the app.",
    status_ready_success: "Conversion ready: {flightCount} flight(s), {pilotCount} pilot(s), and {aircraftCount} aircraft item(s).",
    role_pilot1: "pilot 1",
    role_pilot2: "pilot 2",
    role_pilot3: "pilot 3",
    role_pilot4: "pilot 4",
    pilot_field_firstName: "first name",
    pilot_field_company: "company",
    pilot_field_code: "code",
    pilot_field_phone: "phone",
    pilot_field_email: "email",
    aircraft_field_manufact: "manufacturer",
    aircraft_field_model: "model",
    aircraft_field_variant: "variant",
    aircraft_field_typeRating: "type rating",
    aircraft_field_company: "company",
    aircraft_field_notes: "notes",
    aircraft_field_type: "type",
    aircraft_field_simulatorCategory: "simulator category",
    aircraft_field_aircraftClass: "class",
    aircraft_field_engineType: "engine type",
    aircraft_type_aircraft: "Aircraft",
    aircraft_type_simulator: "Simulator",
    aircraft_class_ap: "Aeroplane (AP)",
    aircraft_class_rt: "Rotorcraft (RT)",
    aircraft_class_dr: "Drone (DR)",
    aircraft_class_gl: "Glider (GL)",
    aircraft_class_ml: "Microlight (ML)",
    aircraft_class_pl: "Powered Lift (PL)",
    aircraft_class_la: "Lighter Than Air (LA)",
    engine_type_piston: "Piston",
    engine_type_turboprop: "Turboprop/Shaft",
    engine_type_jet: "Jet",
    template_sample_remark: "Sample flight"
  },
  fr: {
    page_title: "Convertisseur CSV AeroLog",
    page_title_file: "Convertisseur CSV/XLSX AeroLog",
    eyebrow: "Outils d'import AeroLog",
    version_label: "Version",
    language_label: "Langue",
    hero_title_html: "CSV vers <code>Flights.json</code>, <code>Pilots.json</code> et <code>Aircrafts.json</code>",
    hero_copy: "Cette page lit un fichier CSV, détecte automatiquement les colonnes connues, vérifie les champs minimums requis et génère les trois fichiers JSON attendus par l'app.",
    hero_title_file_html: "CSV/XLSX vers <code>Flights.json</code>, <code>Pilots.json</code> et <code>Aircrafts.json</code>",
    hero_copy_file: "Cette page lit un fichier CSV ou XLSX, détecte automatiquement les colonnes connues, vérifie les champs minimums requis et génère les trois fichiers JSON attendus par l'app.",
    hero_why_title: "Pourquoi cette page existe",
    hero_why_copy: "Les exports CSV utilisent souvent des libellés qui ne correspondent pas à ceux de l'app. Cet outil sert à les normaliser avant l'import pour garder des JSON exploitables.",
    hero_how_title: "Comment l'utiliser",
    hero_how_copy: "Chargez un CSV, glissez les étiquettes attendues sur les bonnes colonnes, corrigez les signaux orange ou rouges, puis téléchargez les trois fichiers JSON.",
    hero_how_copy_file: "Chargez un fichier CSV ou XLSX, glissez les étiquettes attendues sur les bonnes colonnes, corrigez les signaux orange ou rouges, puis téléchargez les trois fichiers JSON.",
    hero_minimums_title: "Champs minimums",
    hero_minimums_copy_html: "<strong>Vol</strong> : date, immatriculation, pilote 1 et temps total avion ou simulateur.<br><strong>Avion</strong> : constructeur et modèle.<br><strong>Trajet</strong> : départ et arrivée pour les lignes non simulateur.",
    choose_csv: "Choisir un CSV",
    choose_file: "Choisir un CSV ou XLSX",
    download_csv_template: "Télécharger le modèle CSV",
    download_xlsx_template: "Télécharger le modèle XLSX",
    output_filenames_html: "Les noms de sortie sont toujours <code>Flights.json</code>, <code>Pilots.json</code> et <code>Aircrafts.json</code>.",
    template_hint_html: "Dans le modèle CSV, les champs requis commencent par <code>*</code>. Dans le modèle XLSX, les champs requis sont en gras.",
    default_settings_title: "Réglages par défaut",
    default_settings_copy: "Utilisés quand le CSV ne fournit pas certains détails avion.",
    default_type_label: "Type par défaut",
    default_class_label: "Classe par défaut",
    default_engine_type_label: "Type moteur par défaut",
    default_aircraft_company_label: "Compagnie avion par défaut",
    default_pilot_company_label: "Compagnie pilote par défaut",
    optional_placeholder: "Optionnel",
    tip_html: "Conseil : gardez <code>Aircraft</code>, <code>AP</code> et un type moteur cohérent avec votre flotte si le CSV ne contient pas ces colonnes.",
    minimum_required_fields_title: "Champs minimums requis",
    minimum_required_fields_copy: "Le convertisseur accepte des alias de colonnes, mais il lui faut au minimum :",
    constraint_flight_html: "<strong>Vol</strong> : date, immatriculation, pilote 1 et temps total avion ou simulateur.",
    constraint_route_html: "<strong>Trajet</strong> : départ et arrivée si la ligne n'est pas une séance simulateur.",
    constraint_aircraft_html: "<strong>Avion</strong> : immatriculation, constructeur et modèle.",
    constraint_pilot_html: "<strong>Pilote</strong> : un nom de famille pour chaque pilote renseigné.",
    airport_codes_helper: "Les codes aéroport sont conservés tels quels dans le JSON, mais l'app n'importera les vols que si ces codes existent déjà dans sa base aéroports.",
    result_title: "Résultat",
    status_no_file: "Aucun fichier chargé.",
    summary_rows: "Lignes CSV",
    summary_flights: "Vols",
    summary_pilots: "Pilotes",
    summary_aircrafts: "Avions",
    summary_errors: "Erreurs",
    summary_warnings: "Avertissements",
    download_flights: "Télécharger Flights.json",
    download_pilots: "Télécharger Pilots.json",
    download_aircrafts: "Télécharger Aircrafts.json",
    header_overrides_title: "Éditeur de headers CSV",
    header_overrides_title_file: "Éditeur de headers CSV/XLSX",
    header_overrides_copy: "Glissez une étiquette attendue sur une colonne pour la renommer automatiquement, ou modifiez-la manuellement. Vous pouvez aussi ajouter ou supprimer des headers.",
    header_overrides_copy_file: "Glissez une étiquette attendue sur une colonne CSV ou XLSX pour la renommer automatiquement, ou modifiez-la manuellement. Vous pouvez aussi ajouter ou supprimer des headers.",
    header_overrides_add: "Ajouter un header",
    header_overrides_reset: "Réinitialiser",
    expected_fields_copy: "Glissez l'une des étiquettes attendues ci-dessous sur une colonne du CSV.",
    legend_validated: "Vert : étiquette validée",
    legend_optional: "Bleu : étiquette optionnelle reconnue",
    legend_unrecognized: "Orange : colonne non reconnue à revoir",
    legend_error: "Rouge : problème bloquant à corriger",
    editor_metric_validated: "Validées",
    editor_metric_unrecognized: "Non reconnues",
    editor_metric_missing: "Requises manquantes",
    editor_metric_errors: "Erreurs bloquantes",
    editor_metric_warnings: "Avertissements",
    editor_missing_required_title: "Étiquettes requises manquantes",
    problematic_rows_title: "Lignes problematiques",
    problematic_rows_empty: "Aucun probleme detecte sur une ligne.",
    problematic_row_heading: "Ligne {lineNumber}",
    blocking_errors_row_issues: "{count} probleme(s) sur cette ligne",
    problematic_row_hint: "Les champs marques avec * sont obligatoires.",
    problematic_row_save: "Valider les changements",
    problematic_row_delete: "Supprimer la ligne",
    problematic_row_no_fields: "Aucun champ editable detecte pour cette ligne.",
    problematic_row_close: "Fermer l'editeur",
    header_original_column: "Colonne d'origine",
    header_rename_to: "Renommer en",
    header_editor_action: "Action",
    header_detected_target: "Reconnaissance",
    header_overrides_placeholder: "Chargez un CSV pour modifier les noms de colonnes.",
    header_overrides_placeholder_file: "Chargez un fichier CSV ou XLSX pour modifier les noms de colonnes.",
    header_manual_column: "Header manuel",
    header_default_value_label: "Valeur par defaut",
    header_default_value_placeholder: "Appliquee a toutes les lignes",
    header_default_value_missing: "Ajoutez une valeur par defaut pour alimenter toutes les lignes.",
    header_derived_column: "Colonne dérivée",
    header_derived_from: "Extraite depuis {original}",
    header_derived_sample: "Exemple de valeur : {value}",
    header_auto_split_time: "Heure détectée dans cette colonne : création de {header}.",
    header_remove: "Supprimer",
    header_restore: "Restaurer",
    header_delete: "Effacer",
    header_removed: "Supprimé",
    header_status_validated: "Validé",
    header_status_optional: "Optionnel reconnu",
    header_status_unrecognized: "À revoir",
    header_status_removed: "Ignoré",
    untitled_header: "Colonne sans titre #{index}",
    header_match_none: "Pas encore reconnu",
    header_renamed_from: "depuis {original}",
    header_override_duplicate_error: "Deux colonnes ou plus utilisent maintenant le même nom final : {headers}. Donnez un nom final unique à chaque colonne.",
    mapping_title: "Correspondance des colonnes",
    mapping_copy: "Colonnes reconnues automatiquement dans le CSV chargé.",
    mapping_target_field: "Champ cible",
    mapping_detected_column: "Colonne détectée",
    mapping_status: "Statut",
    mapping_placeholder: "Chargez un CSV pour voir la correspondance détectée.",
    unused_columns_title: "Colonnes non reconnues",
    unused_columns_copy: "Utile pour repérer un nom inattendu ou une faute de frappe.",
    unused_columns_placeholder: "Aucune colonne à afficher.",
    blocking_errors_title: "Erreurs bloquantes",
    blocking_errors_copy: "Ces problèmes empêchent la génération des fichiers JSON.",
    errors_placeholder: "Pas encore d'erreur.",
    warnings_title: "Avertissements",
    warnings_copy: "Informations utiles qui ne bloquent pas la génération.",
    warnings_placeholder: "Pas encore d'avertissement.",
    preview_title: "Aperçu JSON",
    preview_copy: "Premier élément de chaque fichier généré.",
    editor_missing_required_empty: "Toutes les étiquettes requises sont disponibles.",
    status_detected: "Détecté",
    status_missing: "Manquant",
    status_optional: "Optionnel",
    mapping_not_detected: "non détecté",
    mapping_no_data: "Aucune donnée.",
    unused_all_recognized: "Toutes les colonnes ont été reconnues ou volontairement ignorées.",
    fatal_unable_analyze: "Impossible d'analyser le CSV.",
    no_errors: "Aucune erreur.",
    no_warnings: "Aucun avertissement.",
    unknown_error_csv: "Erreur inconnue pendant la lecture du CSV.",
    csv_empty: "Le fichier CSV est vide.",
    xlsx_parse_error: "Impossible de lire le fichier XLSX.",
    xlsx_missing_sheet: "Aucune feuille n'a été trouvée dans ce fichier XLSX.",
    loaded_file_fallback: "le fichier chargé",
    error_missing_date_column: "Colonne date introuvable. Ajoutez par exemple `date`, `flight_date` ou `pilotlog_date`.",
    error_missing_registration_column: "Colonne immatriculation introuvable. Ajoutez par exemple `registration`, `tail` ou `ac_reg`.",
    error_missing_pilot1_column: "Colonne pilote 1 introuvable. Ajoutez par exemple `pilot1_last_name`, `pilot1_name`, `captain` ou `name`.",
    error_missing_manufacturer_column: "Colonne constructeur introuvable. Ajoutez par exemple `manufact`, `manufacturer` ou `aircraft_manufact`.",
    error_missing_model_column: "Colonne modèle introuvable. Ajoutez par exemple `model`, `aircraft_model` ou `modele`.",
    error_missing_total_time_column: "Aucune colonne de temps total détectée. Ajoutez `time_total_aircraft`, `time_total_simulator`, `time_total`, `flight_time` ou `Blk Hrs`.",
    row_missing_registration: "Ligne {lineNumber} : immatriculation manquante.",
    row_missing_manufacturer: "Ligne {lineNumber} : constructeur manquant pour {registration}.",
    row_missing_model: "Ligne {lineNumber} : modèle manquant pour {registration}.",
    row_invalid_date: "Ligne {lineNumber} : date vide ou invalide.",
    row_invalid_total_time: "Ligne {lineNumber} : temps total manquant ou invalide.",
    row_invalid_times: "Ligne {lineNumber} : heure de départ ou d'arrivée invalide.",
    row_missing_departure_airport: "Ligne {lineNumber} : aéroport de départ manquant.",
    row_missing_arrival_airport: "Ligne {lineNumber} : aéroport d'arrivée manquant.",
    row_role_missing_last_name: "Ligne {lineNumber} : {role} est renseigné sans nom de famille.",
    row_pilot1_required: "Ligne {lineNumber} : pilote 1 obligatoire.",
    warning_conflicting_pilot_field: "Ligne {lineNumber} : valeur contradictoire pour {role} sur {field} ; la première valeur est conservée pour {lastName}.",
    warning_conflicting_aircraft_field: "Ligne {lineNumber} : valeur avion contradictoire pour {field} sur {registration} ; la première valeur est conservée.",
    status_blocked: "Conversion bloquée pour {fileName} : {errorCount} point(s) à corriger avant export.",
    status_ready_warnings: "Conversion prête avec {warningCount} avertissement(s). Vérifiez-les avant l'import dans l'app.",
    status_ready_success: "Conversion prête : {flightCount} vol(s), {pilotCount} pilote(s) et {aircraftCount} avion(s).",
    role_pilot1: "pilote 1",
    role_pilot2: "pilote 2",
    role_pilot3: "pilote 3",
    role_pilot4: "pilote 4",
    pilot_field_firstName: "prénom",
    pilot_field_company: "compagnie",
    pilot_field_code: "code",
    pilot_field_phone: "téléphone",
    pilot_field_email: "e-mail",
    aircraft_field_manufact: "constructeur",
    aircraft_field_model: "modèle",
    aircraft_field_variant: "variante",
    aircraft_field_typeRating: "qualification de type",
    aircraft_field_company: "compagnie",
    aircraft_field_notes: "notes",
    aircraft_field_type: "type",
    aircraft_field_simulatorCategory: "catégorie simulateur",
    aircraft_field_aircraftClass: "classe",
    aircraft_field_engineType: "type moteur",
    aircraft_type_aircraft: "Aircraft",
    aircraft_type_simulator: "Simulator",
    aircraft_class_ap: "Avion (AP)",
    aircraft_class_rt: "Hélicoptère (RT)",
    aircraft_class_dr: "Drone (DR)",
    aircraft_class_gl: "Planeur (GL)",
    aircraft_class_ml: "ULM (ML)",
    aircraft_class_pl: "Voilure propulsée verticale (PL)",
    aircraft_class_la: "Plus léger que l'air (LA)",
    engine_type_piston: "Piston",
    engine_type_turboprop: "Turbopropulseur / turbine",
    engine_type_jet: "Jet",
    template_sample_remark: "Vol d'exemple"
  },
  es: {
    page_title: "Convertidor CSV de AeroLog",
    eyebrow: "Herramientas de importación AeroLog",
    language_label: "Idioma",
    hero_title_html: "CSV a <code>Flights.json</code>, <code>Pilots.json</code> y <code>Aircrafts.json</code>",
    hero_copy: "Esta página lee un único archivo CSV, detecta automáticamente las columnas conocidas, valida los campos mínimos requeridos y genera los tres archivos JSON esperados por la app.",
    choose_csv: "Elegir un CSV",
    download_csv_template: "Descargar plantilla CSV",
    output_filenames_html: "Los nombres de salida siempre son <code>Flights.json</code>, <code>Pilots.json</code> y <code>Aircrafts.json</code>.",
    default_settings_title: "Ajustes predeterminados",
    default_settings_copy: "Se usan cuando el CSV no proporciona algunos detalles de la aeronave.",
    default_type_label: "Tipo predeterminado",
    default_class_label: "Clase predeterminada",
    default_engine_type_label: "Tipo de motor predeterminado",
    default_aircraft_company_label: "Compañía de aeronave predeterminada",
    default_pilot_company_label: "Compañía de piloto predeterminada",
    optional_placeholder: "Opcional",
    tip_html: "Consejo: mantén <code>Aircraft</code>, <code>AP</code> y un tipo de motor que coincida con tu flota si el CSV no incluye esas columnas.",
    minimum_required_fields_title: "Campos mínimos requeridos",
    minimum_required_fields_copy: "El convertidor acepta alias de columnas, pero aun así necesita al menos:",
    constraint_flight_html: "<strong>Vuelo</strong>: fecha, matrícula, piloto 1 y tiempo total de aeronave o simulador.",
    constraint_route_html: "<strong>Ruta</strong>: salida y llegada si la fila no es una sesión de simulador.",
    constraint_aircraft_html: "<strong>Aeronave</strong>: matrícula, fabricante y modelo.",
    constraint_pilot_html: "<strong>Piloto</strong>: un apellido para cada piloto indicado.",
    airport_codes_helper: "Los códigos de aeropuerto se conservan tal cual en el JSON, pero la app solo importará vuelos si esos códigos ya existen en su base de aeropuertos.",
    result_title: "Resultado",
    status_no_file: "Ningún archivo cargado.",
    summary_rows: "Filas CSV",
    summary_flights: "Vuelos",
    summary_pilots: "Pilotos",
    summary_aircrafts: "Aeronaves",
    summary_errors: "Errores",
    summary_warnings: "Avisos",
    download_flights: "Descargar Flights.json",
    download_pilots: "Descargar Pilots.json",
    download_aircrafts: "Descargar Aircrafts.json",
    mapping_title: "Asignación de columnas",
    mapping_copy: "Columnas reconocidas automáticamente en el CSV cargado.",
    mapping_target_field: "Campo de destino",
    mapping_detected_column: "Columna detectada",
    mapping_status: "Estado",
    mapping_placeholder: "Carga un CSV para ver la asignación detectada.",
    unused_columns_title: "Columnas no reconocidas",
    unused_columns_copy: "Útil para detectar nombres inesperados o errores tipográficos.",
    unused_columns_placeholder: "No hay columnas para mostrar.",
    blocking_errors_title: "Errores bloqueantes",
    blocking_errors_copy: "Estos problemas impiden generar los archivos JSON.",
    errors_placeholder: "Todavía no hay errores.",
    warnings_title: "Avisos",
    warnings_copy: "Información útil que no bloquea la generación.",
    warnings_placeholder: "Todavía no hay avisos.",
    preview_title: "Vista previa JSON",
    preview_copy: "Primer elemento de cada archivo generado.",
    status_detected: "Detectado",
    status_missing: "Falta",
    status_optional: "Opcional",
    mapping_not_detected: "no detectado",
    mapping_no_data: "Sin datos.",
    unused_all_recognized: "Todas las columnas se reconocieron o se ignoraron intencionadamente.",
    fatal_unable_analyze: "No se pudo analizar el CSV.",
    no_errors: "Sin errores.",
    no_warnings: "Sin avisos.",
    unknown_error_csv: "Error desconocido al leer el CSV.",
    csv_empty: "El archivo CSV está vacío.",
    loaded_file_fallback: "el archivo cargado",
    error_missing_date_column: "No se encontró la columna de fecha. Añade algo como `date`, `flight_date` o `pilotlog_date`.",
    error_missing_registration_column: "No se encontró la columna de matrícula. Añade algo como `registration`, `tail` o `ac_reg`.",
    error_missing_pilot1_column: "No se encontró la columna del piloto 1. Añade algo como `pilot1_last_name`, `pilot1_name`, `captain` o `name`.",
    error_missing_manufacturer_column: "No se encontró la columna del fabricante. Añade algo como `manufact`, `manufacturer` o `aircraft_manufact`.",
    error_missing_model_column: "No se encontró la columna del modelo. Añade algo como `model`, `aircraft_model` o `modele`.",
    error_missing_total_time_column: "No se detectó ninguna columna de tiempo total. Añade `time_total_aircraft`, `time_total_simulator`, `time_total`, `flight_time` o `Blk Hrs`.",
    row_missing_registration: "Fila {lineNumber}: falta la matrícula.",
    row_missing_manufacturer: "Fila {lineNumber}: falta el fabricante para {registration}.",
    row_missing_model: "Fila {lineNumber}: falta el modelo para {registration}.",
    row_invalid_date: "Fila {lineNumber}: fecha vacía o no válida.",
    row_invalid_total_time: "Fila {lineNumber}: tiempo total no válido o ausente.",
    row_invalid_times: "Fila {lineNumber}: hora de salida o llegada no válida.",
    row_missing_departure_airport: "Fila {lineNumber}: falta el aeropuerto de salida.",
    row_missing_arrival_airport: "Fila {lineNumber}: falta el aeropuerto de llegada.",
    row_role_missing_last_name: "Fila {lineNumber}: {role} se proporcionó sin apellido.",
    row_pilot1_required: "Fila {lineNumber}: el piloto 1 es obligatorio.",
    warning_conflicting_pilot_field: "Fila {lineNumber}: valor conflictivo de {role} para {field}; se conserva el primer valor de {lastName}.",
    warning_conflicting_aircraft_field: "Fila {lineNumber}: valor conflictivo de aeronave para {field} en {registration}; se conserva el primer valor.",
    status_blocked: "Conversión bloqueada para {fileName}: hay que corregir {errorCount} incidencia(s) antes de exportar.",
    status_ready_warnings: "Conversión lista con {warningCount} aviso(s). Revísalos antes de importar en la app.",
    status_ready_success: "Conversión lista: {flightCount} vuelo(s), {pilotCount} piloto(s) y {aircraftCount} aeronave(s).",
    role_pilot1: "piloto 1",
    role_pilot2: "piloto 2",
    role_pilot3: "piloto 3",
    role_pilot4: "piloto 4",
    pilot_field_firstName: "nombre",
    pilot_field_company: "compañía",
    pilot_field_code: "código",
    pilot_field_phone: "teléfono",
    pilot_field_email: "correo electrónico",
    aircraft_field_manufact: "fabricante",
    aircraft_field_model: "modelo",
    aircraft_field_variant: "variante",
    aircraft_field_typeRating: "habilitación de tipo",
    aircraft_field_company: "compañía",
    aircraft_field_notes: "notas",
    aircraft_field_type: "tipo",
    aircraft_field_simulatorCategory: "categoría de simulador",
    aircraft_field_aircraftClass: "clase",
    aircraft_field_engineType: "tipo de motor",
    aircraft_type_aircraft: "Aeronave",
    aircraft_type_simulator: "Simulador",
    aircraft_class_ap: "Avión (AP)",
    aircraft_class_rt: "Rotorcraft (RT)",
    aircraft_class_dr: "Dron (DR)",
    aircraft_class_gl: "Planeador (GL)",
    aircraft_class_ml: "Ultraligero (ML)",
    aircraft_class_pl: "Ala motorizada vertical (PL)",
    aircraft_class_la: "Más ligero que el aire (LA)",
    engine_type_piston: "Pistón",
    engine_type_turboprop: "Turbohélice / eje",
    engine_type_jet: "Jet",
    template_sample_remark: "Vuelo de ejemplo"
  },
  de: {
    page_title: "AeroLog CSV-Konverter",
    eyebrow: "AeroLog-Importwerkzeuge",
    language_label: "Sprache",
    hero_title_html: "CSV zu <code>Flights.json</code>, <code>Pilots.json</code> und <code>Aircrafts.json</code>",
    hero_copy: "Diese Seite liest eine einzelne CSV-Datei, erkennt bekannte Spalten automatisch, prüft die erforderlichen Mindestfelder und erzeugt die drei JSON-Dateien, die die App erwartet.",
    choose_csv: "CSV auswählen",
    download_csv_template: "CSV-Vorlage herunterladen",
    output_filenames_html: "Die Ausgabedateien heißen immer <code>Flights.json</code>, <code>Pilots.json</code> und <code>Aircrafts.json</code>.",
    default_settings_title: "Standardwerte",
    default_settings_copy: "Werden verwendet, wenn die CSV einige Flugzeugdetails nicht enthält.",
    default_type_label: "Standardtyp",
    default_class_label: "Standardklasse",
    default_engine_type_label: "Standardmotortyp",
    default_aircraft_company_label: "Standard-Flugzeugfirma",
    default_pilot_company_label: "Standard-Pilotenfirma",
    optional_placeholder: "Optional",
    tip_html: "Tipp: Lassen Sie <code>Aircraft</code>, <code>AP</code> und einen zur Flotte passenden Motortyp stehen, wenn die CSV diese Spalten nicht enthält.",
    minimum_required_fields_title: "Mindestens erforderliche Felder",
    minimum_required_fields_copy: "Der Konverter akzeptiert Spaltenaliase, benötigt aber mindestens:",
    constraint_flight_html: "<strong>Flug</strong>: Datum, Kennzeichen, Pilot 1 und Gesamtzeit Flugzeug oder Simulator.",
    constraint_route_html: "<strong>Route</strong>: Abflug und Ankunft, wenn die Zeile keine Simulator-Sitzung ist.",
    constraint_aircraft_html: "<strong>Flugzeug</strong>: Kennzeichen, Hersteller und Modell.",
    constraint_pilot_html: "<strong>Pilot</strong>: einen Nachnamen für jeden angegebenen Piloten.",
    airport_codes_helper: "Flughafencodes bleiben im JSON unverändert, aber die App importiert Flüge nur, wenn diese Codes bereits in ihrer Flughafendatenbank vorhanden sind.",
    result_title: "Ergebnis",
    status_no_file: "Keine Datei geladen.",
    summary_rows: "CSV-Zeilen",
    summary_flights: "Flüge",
    summary_pilots: "Piloten",
    summary_aircrafts: "Flugzeuge",
    summary_errors: "Fehler",
    summary_warnings: "Warnungen",
    download_flights: "Flights.json herunterladen",
    download_pilots: "Pilots.json herunterladen",
    download_aircrafts: "Aircrafts.json herunterladen",
    mapping_title: "Spaltenzuordnung",
    mapping_copy: "Automatisch erkannte Spalten in der geladenen CSV.",
    mapping_target_field: "Zielfeld",
    mapping_detected_column: "Erkannte Spalte",
    mapping_status: "Status",
    mapping_placeholder: "CSV laden, um die erkannte Zuordnung zu sehen.",
    unused_columns_title: "Nicht erkannte Spalten",
    unused_columns_copy: "Hilfreich, um unerwartete Spaltennamen oder Tippfehler zu finden.",
    unused_columns_placeholder: "Keine Spalten anzuzeigen.",
    blocking_errors_title: "Blockierende Fehler",
    blocking_errors_copy: "Diese Probleme verhindern die Erzeugung der JSON-Dateien.",
    errors_placeholder: "Noch keine Fehler.",
    warnings_title: "Warnungen",
    warnings_copy: "Nützliche Hinweise, die die Erzeugung nicht blockieren.",
    warnings_placeholder: "Noch keine Warnungen.",
    preview_title: "JSON-Vorschau",
    preview_copy: "Erstes Element jeder erzeugten Datei.",
    status_detected: "Erkannt",
    status_missing: "Fehlt",
    status_optional: "Optional",
    mapping_not_detected: "nicht erkannt",
    mapping_no_data: "Keine Daten.",
    unused_all_recognized: "Alle Spalten wurden erkannt oder absichtlich ignoriert.",
    fatal_unable_analyze: "Die CSV konnte nicht analysiert werden.",
    no_errors: "Keine Fehler.",
    no_warnings: "Keine Warnungen.",
    unknown_error_csv: "Unbekannter Fehler beim Lesen der CSV.",
    csv_empty: "Die CSV-Datei ist leer.",
    loaded_file_fallback: "die geladene Datei",
    error_missing_date_column: "Datumsspalte nicht gefunden. Fügen Sie z. B. `date`, `flight_date` oder `pilotlog_date` hinzu.",
    error_missing_registration_column: "Kennzeichenspalte nicht gefunden. Fügen Sie z. B. `registration`, `tail` oder `ac_reg` hinzu.",
    error_missing_pilot1_column: "Spalte für Pilot 1 nicht gefunden. Fügen Sie z. B. `pilot1_last_name`, `pilot1_name`, `captain` oder `name` hinzu.",
    error_missing_manufacturer_column: "Herstellerspalte nicht gefunden. Fügen Sie z. B. `manufact`, `manufacturer` oder `aircraft_manufact` hinzu.",
    error_missing_model_column: "Modellspalte nicht gefunden. Fügen Sie z. B. `model`, `aircraft_model` oder `modele` hinzu.",
    error_missing_total_time_column: "Keine Gesamtzeitspalte erkannt. Fügen Sie `time_total_aircraft`, `time_total_simulator`, `time_total`, `flight_time` oder `Blk Hrs` hinzu.",
    row_missing_registration: "Zeile {lineNumber}: Kennzeichen fehlt.",
    row_missing_manufacturer: "Zeile {lineNumber}: Hersteller für {registration} fehlt.",
    row_missing_model: "Zeile {lineNumber}: Modell für {registration} fehlt.",
    row_invalid_date: "Zeile {lineNumber}: Datum ungültig oder leer.",
    row_invalid_total_time: "Zeile {lineNumber}: Gesamtzeit fehlt oder ist ungültig.",
    row_invalid_times: "Zeile {lineNumber}: Abflug- oder Ankunftszeit ist ungültig.",
    row_missing_departure_airport: "Zeile {lineNumber}: Abflughafen fehlt.",
    row_missing_arrival_airport: "Zeile {lineNumber}: Ankunftsflughafen fehlt.",
    row_role_missing_last_name: "Zeile {lineNumber}: {role} wurde ohne Nachnamen angegeben.",
    row_pilot1_required: "Zeile {lineNumber}: Pilot 1 ist erforderlich.",
    warning_conflicting_pilot_field: "Zeile {lineNumber}: widersprüchlicher Wert für {role} bei {field}; der erste Wert für {lastName} bleibt erhalten.",
    warning_conflicting_aircraft_field: "Zeile {lineNumber}: widersprüchlicher Flugzeugwert für {field} bei {registration}; der erste Wert bleibt erhalten.",
    status_blocked: "Konvertierung für {fileName} blockiert: {errorCount} Punkt(e) müssen vor dem Export korrigiert werden.",
    status_ready_warnings: "Konvertierung mit {warningCount} Warnung(en) bereit. Bitte vor dem Import in die App prüfen.",
    status_ready_success: "Konvertierung bereit: {flightCount} Flug/Flüge, {pilotCount} Pilot(en) und {aircraftCount} Flugzeug(e).",
    role_pilot1: "Pilot 1",
    role_pilot2: "Pilot 2",
    role_pilot3: "Pilot 3",
    role_pilot4: "Pilot 4",
    pilot_field_firstName: "Vorname",
    pilot_field_company: "Firma",
    pilot_field_code: "Code",
    pilot_field_phone: "Telefon",
    pilot_field_email: "E-Mail",
    aircraft_field_manufact: "Hersteller",
    aircraft_field_model: "Modell",
    aircraft_field_variant: "Variante",
    aircraft_field_typeRating: "Musterberechtigung",
    aircraft_field_company: "Firma",
    aircraft_field_notes: "Notizen",
    aircraft_field_type: "Typ",
    aircraft_field_simulatorCategory: "Simulator-Kategorie",
    aircraft_field_aircraftClass: "Klasse",
    aircraft_field_engineType: "Motortyp",
    aircraft_type_aircraft: "Flugzeug",
    aircraft_type_simulator: "Simulator",
    aircraft_class_ap: "Flugzeug (AP)",
    aircraft_class_rt: "Drehflügler (RT)",
    aircraft_class_dr: "Drohne (DR)",
    aircraft_class_gl: "Segelflugzeug (GL)",
    aircraft_class_ml: "Ultraleicht (ML)",
    aircraft_class_pl: "Powered Lift (PL)",
    aircraft_class_la: "Leichter als Luft (LA)",
    engine_type_piston: "Kolben",
    engine_type_turboprop: "Turboprop / Welle",
    engine_type_jet: "Jet",
    template_sample_remark: "Beispielflug"
  },
  it: {
    page_title: "Convertitore CSV AeroLog",
    eyebrow: "Strumenti di importazione AeroLog",
    language_label: "Lingua",
    hero_title_html: "CSV in <code>Flights.json</code>, <code>Pilots.json</code> e <code>Aircrafts.json</code>",
    hero_copy: "Questa pagina legge un singolo file CSV, rileva automaticamente le colonne conosciute, valida i campi minimi richiesti e genera i tre file JSON attesi dall'app.",
    choose_csv: "Scegli un CSV",
    download_csv_template: "Scarica modello CSV",
    output_filenames_html: "I nomi dei file di output sono sempre <code>Flights.json</code>, <code>Pilots.json</code> e <code>Aircrafts.json</code>.",
    default_settings_title: "Impostazioni predefinite",
    default_settings_copy: "Usate quando il CSV non fornisce alcuni dettagli dell'aeromobile.",
    default_type_label: "Tipo predefinito",
    default_class_label: "Classe predefinita",
    default_engine_type_label: "Tipo motore predefinito",
    default_aircraft_company_label: "Compagnia aeromobile predefinita",
    default_pilot_company_label: "Compagnia pilota predefinita",
    optional_placeholder: "Opzionale",
    tip_html: "Suggerimento: mantieni <code>Aircraft</code>, <code>AP</code> e un tipo motore coerente con la tua flotta se il CSV non contiene queste colonne.",
    minimum_required_fields_title: "Campi minimi richiesti",
    minimum_required_fields_copy: "Il convertitore accetta alias di colonna, ma richiede comunque almeno:",
    constraint_flight_html: "<strong>Volo</strong>: data, immatricolazione, pilota 1 e tempo totale velivolo o simulatore.",
    constraint_route_html: "<strong>Rotta</strong>: partenza e arrivo se la riga non è una sessione di simulatore.",
    constraint_aircraft_html: "<strong>Aeromobile</strong>: immatricolazione, costruttore e modello.",
    constraint_pilot_html: "<strong>Pilota</strong>: un cognome per ogni pilota indicato.",
    airport_codes_helper: "I codici aeroporto restano invariati nel JSON, ma l'app importerà i voli solo se quei codici esistono già nel suo database aeroporti.",
    result_title: "Risultato",
    status_no_file: "Nessun file caricato.",
    summary_rows: "Righe CSV",
    summary_flights: "Voli",
    summary_pilots: "Piloti",
    summary_aircrafts: "Aeromobili",
    summary_errors: "Errori",
    summary_warnings: "Avvisi",
    download_flights: "Scarica Flights.json",
    download_pilots: "Scarica Pilots.json",
    download_aircrafts: "Scarica Aircrafts.json",
    mapping_title: "Mappatura colonne",
    mapping_copy: "Colonne riconosciute automaticamente nel CSV caricato.",
    mapping_target_field: "Campo di destinazione",
    mapping_detected_column: "Colonna rilevata",
    mapping_status: "Stato",
    mapping_placeholder: "Carica un CSV per vedere la mappatura rilevata.",
    unused_columns_title: "Colonne non riconosciute",
    unused_columns_copy: "Utile per individuare nomi inattesi o errori di battitura.",
    unused_columns_placeholder: "Nessuna colonna da mostrare.",
    blocking_errors_title: "Errori bloccanti",
    blocking_errors_copy: "Questi problemi impediscono la generazione dei file JSON.",
    errors_placeholder: "Ancora nessun errore.",
    warnings_title: "Avvisi",
    warnings_copy: "Informazioni utili che non bloccano la generazione.",
    warnings_placeholder: "Ancora nessun avviso.",
    preview_title: "Anteprima JSON",
    preview_copy: "Primo elemento di ciascun file generato.",
    status_detected: "Rilevato",
    status_missing: "Mancante",
    status_optional: "Opzionale",
    mapping_not_detected: "non rilevato",
    mapping_no_data: "Nessun dato.",
    unused_all_recognized: "Tutte le colonne sono state riconosciute o ignorate intenzionalmente.",
    fatal_unable_analyze: "Impossibile analizzare il CSV.",
    no_errors: "Nessun errore.",
    no_warnings: "Nessun avviso.",
    unknown_error_csv: "Errore sconosciuto durante la lettura del CSV.",
    csv_empty: "Il file CSV è vuoto.",
    loaded_file_fallback: "il file caricato",
    error_missing_date_column: "Colonna data non trovata. Aggiungi qualcosa come `date`, `flight_date` o `pilotlog_date`.",
    error_missing_registration_column: "Colonna immatricolazione non trovata. Aggiungi qualcosa come `registration`, `tail` o `ac_reg`.",
    error_missing_pilot1_column: "Colonna pilota 1 non trovata. Aggiungi qualcosa come `pilot1_last_name`, `pilot1_name`, `captain` o `name`.",
    error_missing_manufacturer_column: "Colonna costruttore non trovata. Aggiungi qualcosa come `manufact`, `manufacturer` o `aircraft_manufact`.",
    error_missing_model_column: "Colonna modello non trovata. Aggiungi qualcosa come `model`, `aircraft_model` o `modele`.",
    error_missing_total_time_column: "Nessuna colonna del tempo totale rilevata. Aggiungi `time_total_aircraft`, `time_total_simulator`, `time_total`, `flight_time` o `Blk Hrs`.",
    row_missing_registration: "Riga {lineNumber}: immatricolazione mancante.",
    row_missing_manufacturer: "Riga {lineNumber}: costruttore mancante per {registration}.",
    row_missing_model: "Riga {lineNumber}: modello mancante per {registration}.",
    row_invalid_date: "Riga {lineNumber}: data vuota o non valida.",
    row_invalid_total_time: "Riga {lineNumber}: tempo totale mancante o non valido.",
    row_invalid_times: "Riga {lineNumber}: orario di partenza o arrivo non valido.",
    row_missing_departure_airport: "Riga {lineNumber}: aeroporto di partenza mancante.",
    row_missing_arrival_airport: "Riga {lineNumber}: aeroporto di arrivo mancante.",
    row_role_missing_last_name: "Riga {lineNumber}: {role} è indicato senza cognome.",
    row_pilot1_required: "Riga {lineNumber}: pilota 1 obbligatorio.",
    warning_conflicting_pilot_field: "Riga {lineNumber}: valore in conflitto per {role} su {field}; viene mantenuto il primo valore per {lastName}.",
    warning_conflicting_aircraft_field: "Riga {lineNumber}: valore aeromobile in conflitto per {field} su {registration}; viene mantenuto il primo valore.",
    status_blocked: "Conversione bloccata per {fileName}: correggere {errorCount} problema/i prima dell'esportazione.",
    status_ready_warnings: "Conversione pronta con {warningCount} avviso/i. Controllali prima dell'import nell'app.",
    status_ready_success: "Conversione pronta: {flightCount} volo/i, {pilotCount} pilota/i e {aircraftCount} aeromobile/i.",
    role_pilot1: "pilota 1",
    role_pilot2: "pilota 2",
    role_pilot3: "pilota 3",
    role_pilot4: "pilota 4",
    pilot_field_firstName: "nome",
    pilot_field_company: "compagnia",
    pilot_field_code: "codice",
    pilot_field_phone: "telefono",
    pilot_field_email: "e-mail",
    aircraft_field_manufact: "costruttore",
    aircraft_field_model: "modello",
    aircraft_field_variant: "variante",
    aircraft_field_typeRating: "abilitazione di tipo",
    aircraft_field_company: "compagnia",
    aircraft_field_notes: "note",
    aircraft_field_type: "tipo",
    aircraft_field_simulatorCategory: "categoria simulatore",
    aircraft_field_aircraftClass: "classe",
    aircraft_field_engineType: "tipo motore",
    aircraft_type_aircraft: "Aeromobile",
    aircraft_type_simulator: "Simulatore",
    aircraft_class_ap: "Aeroplano (AP)",
    aircraft_class_rt: "Rotorcraft (RT)",
    aircraft_class_dr: "Drone (DR)",
    aircraft_class_gl: "Aliante (GL)",
    aircraft_class_ml: "Ultraleggero (ML)",
    aircraft_class_pl: "Powered Lift (PL)",
    aircraft_class_la: "Più leggero dell'aria (LA)",
    engine_type_piston: "Pistoni",
    engine_type_turboprop: "Turboelica / albero",
    engine_type_jet: "Jet",
    template_sample_remark: "Volo di esempio"
  },
  pt: {
    page_title: "Conversor CSV AeroLog",
    eyebrow: "Ferramentas de importação AeroLog",
    language_label: "Idioma",
    hero_title_html: "CSV para <code>Flights.json</code>, <code>Pilots.json</code> e <code>Aircrafts.json</code>",
    hero_copy: "Esta página lê um único arquivo CSV, detecta automaticamente colunas conhecidas, valida os campos mínimos obrigatórios e gera os três arquivos JSON esperados pelo app.",
    choose_csv: "Escolher um CSV",
    download_csv_template: "Baixar modelo CSV",
    output_filenames_html: "Os nomes de saída são sempre <code>Flights.json</code>, <code>Pilots.json</code> e <code>Aircrafts.json</code>.",
    default_settings_title: "Configurações padrão",
    default_settings_copy: "Usadas quando o CSV não fornece alguns detalhes da aeronave.",
    default_type_label: "Tipo padrão",
    default_class_label: "Classe padrão",
    default_engine_type_label: "Tipo de motor padrão",
    default_aircraft_company_label: "Empresa da aeronave padrão",
    default_pilot_company_label: "Empresa do piloto padrão",
    optional_placeholder: "Opcional",
    tip_html: "Dica: mantenha <code>Aircraft</code>, <code>AP</code> e um tipo de motor compatível com sua frota se o CSV não incluir essas colunas.",
    minimum_required_fields_title: "Campos mínimos obrigatórios",
    minimum_required_fields_copy: "O conversor aceita aliases de coluna, mas ainda precisa de pelo menos:",
    constraint_flight_html: "<strong>Voo</strong>: data, matrícula, piloto 1 e tempo total de aeronave ou simulador.",
    constraint_route_html: "<strong>Rota</strong>: partida e chegada se a linha não for uma sessão de simulador.",
    constraint_aircraft_html: "<strong>Aeronave</strong>: matrícula, fabricante e modelo.",
    constraint_pilot_html: "<strong>Piloto</strong>: um sobrenome para cada piloto informado.",
    airport_codes_helper: "Os códigos de aeroporto são mantidos como estão no JSON, mas o app só importará voos se esses códigos já existirem no banco de aeroportos.",
    result_title: "Resultado",
    status_no_file: "Nenhum arquivo carregado.",
    summary_rows: "Linhas CSV",
    summary_flights: "Voos",
    summary_pilots: "Pilotos",
    summary_aircrafts: "Aeronaves",
    summary_errors: "Erros",
    summary_warnings: "Avisos",
    download_flights: "Baixar Flights.json",
    download_pilots: "Baixar Pilots.json",
    download_aircrafts: "Baixar Aircrafts.json",
    mapping_title: "Mapeamento de colunas",
    mapping_copy: "Colunas reconhecidas automaticamente no CSV carregado.",
    mapping_target_field: "Campo de destino",
    mapping_detected_column: "Coluna detectada",
    mapping_status: "Status",
    mapping_placeholder: "Carregue um CSV para ver o mapeamento detectado.",
    unused_columns_title: "Colunas não reconhecidas",
    unused_columns_copy: "Útil para identificar nomes inesperados ou erros de digitação.",
    unused_columns_placeholder: "Nenhuma coluna para mostrar.",
    blocking_errors_title: "Erros bloqueadores",
    blocking_errors_copy: "Esses problemas impedem a geração dos arquivos JSON.",
    errors_placeholder: "Ainda não há erros.",
    warnings_title: "Avisos",
    warnings_copy: "Informações úteis que não bloqueiam a geração.",
    warnings_placeholder: "Ainda não há avisos.",
    preview_title: "Prévia JSON",
    preview_copy: "Primeiro item de cada arquivo gerado.",
    status_detected: "Detectado",
    status_missing: "Ausente",
    status_optional: "Opcional",
    mapping_not_detected: "não detectado",
    mapping_no_data: "Sem dados.",
    unused_all_recognized: "Todas as colunas foram reconhecidas ou ignoradas intencionalmente.",
    fatal_unable_analyze: "Não foi possível analisar o CSV.",
    no_errors: "Sem erros.",
    no_warnings: "Sem avisos.",
    unknown_error_csv: "Erro desconhecido ao ler o CSV.",
    csv_empty: "O arquivo CSV está vazio.",
    loaded_file_fallback: "o arquivo carregado",
    error_missing_date_column: "Coluna de data não encontrada. Adicione algo como `date`, `flight_date` ou `pilotlog_date`.",
    error_missing_registration_column: "Coluna de matrícula não encontrada. Adicione algo como `registration`, `tail` ou `ac_reg`.",
    error_missing_pilot1_column: "Coluna do piloto 1 não encontrada. Adicione algo como `pilot1_last_name`, `pilot1_name`, `captain` ou `name`.",
    error_missing_manufacturer_column: "Coluna do fabricante não encontrada. Adicione algo como `manufact`, `manufacturer` ou `aircraft_manufact`.",
    error_missing_model_column: "Coluna do modelo não encontrada. Adicione algo como `model`, `aircraft_model` ou `modele`.",
    error_missing_total_time_column: "Nenhuma coluna de tempo total foi detectada. Adicione `time_total_aircraft`, `time_total_simulator`, `time_total`, `flight_time` ou `Blk Hrs`.",
    row_missing_registration: "Linha {lineNumber}: matrícula ausente.",
    row_missing_manufacturer: "Linha {lineNumber}: fabricante ausente para {registration}.",
    row_missing_model: "Linha {lineNumber}: modelo ausente para {registration}.",
    row_invalid_date: "Linha {lineNumber}: data vazia ou inválida.",
    row_invalid_total_time: "Linha {lineNumber}: tempo total ausente ou inválido.",
    row_invalid_times: "Linha {lineNumber}: horário de partida ou chegada inválido.",
    row_missing_departure_airport: "Linha {lineNumber}: aeroporto de partida ausente.",
    row_missing_arrival_airport: "Linha {lineNumber}: aeroporto de chegada ausente.",
    row_role_missing_last_name: "Linha {lineNumber}: {role} foi informado sem sobrenome.",
    row_pilot1_required: "Linha {lineNumber}: piloto 1 é obrigatório.",
    warning_conflicting_pilot_field: "Linha {lineNumber}: valor conflitante de {role} para {field}; o primeiro valor de {lastName} será mantido.",
    warning_conflicting_aircraft_field: "Linha {lineNumber}: valor conflitante de aeronave para {field} em {registration}; o primeiro valor será mantido.",
    status_blocked: "Conversão bloqueada para {fileName}: é preciso corrigir {errorCount} item(ns) antes da exportação.",
    status_ready_warnings: "Conversão pronta com {warningCount} aviso(s). Revise antes de importar no app.",
    status_ready_success: "Conversão pronta: {flightCount} voo(s), {pilotCount} piloto(s) e {aircraftCount} aeronave(s).",
    role_pilot1: "piloto 1",
    role_pilot2: "piloto 2",
    role_pilot3: "piloto 3",
    role_pilot4: "piloto 4",
    pilot_field_firstName: "nome",
    pilot_field_company: "empresa",
    pilot_field_code: "código",
    pilot_field_phone: "telefone",
    pilot_field_email: "e-mail",
    aircraft_field_manufact: "fabricante",
    aircraft_field_model: "modelo",
    aircraft_field_variant: "variante",
    aircraft_field_typeRating: "habilitação de tipo",
    aircraft_field_company: "empresa",
    aircraft_field_notes: "notas",
    aircraft_field_type: "tipo",
    aircraft_field_simulatorCategory: "categoria de simulador",
    aircraft_field_aircraftClass: "classe",
    aircraft_field_engineType: "tipo de motor",
    aircraft_type_aircraft: "Aeronave",
    aircraft_type_simulator: "Simulador",
    aircraft_class_ap: "Avião (AP)",
    aircraft_class_rt: "Rotorcraft (RT)",
    aircraft_class_dr: "Drone (DR)",
    aircraft_class_gl: "Planador (GL)",
    aircraft_class_ml: "Ultraleve (ML)",
    aircraft_class_pl: "Powered Lift (PL)",
    aircraft_class_la: "Mais leve que o ar (LA)",
    engine_type_piston: "Pistão",
    engine_type_turboprop: "Turboélice / eixo",
    engine_type_jet: "Jato",
    template_sample_remark: "Voo de exemplo"
  },
  nl: {
    page_title: "AeroLog CSV-converter",
    eyebrow: "AeroLog-importhulpmiddelen",
    language_label: "Taal",
    hero_title_html: "CSV naar <code>Flights.json</code>, <code>Pilots.json</code> en <code>Aircrafts.json</code>",
    hero_copy: "Deze pagina leest één CSV-bestand, herkent bekende kolommen automatisch, controleert de minimaal vereiste velden en genereert de drie JSON-bestanden die de app verwacht.",
    choose_csv: "Kies een CSV",
    download_csv_template: "CSV-sjabloon downloaden",
    output_filenames_html: "De uitvoernamen zijn altijd <code>Flights.json</code>, <code>Pilots.json</code> en <code>Aircrafts.json</code>.",
    default_settings_title: "Standaardinstellingen",
    default_settings_copy: "Worden gebruikt wanneer de CSV bepaalde vliegtuigdetails niet bevat.",
    default_type_label: "Standaardtype",
    default_class_label: "Standaardklasse",
    default_engine_type_label: "Standaard motortype",
    default_aircraft_company_label: "Standaard vliegtuigbedrijf",
    default_pilot_company_label: "Standaard pilotenbedrijf",
    optional_placeholder: "Optioneel",
    tip_html: "Tip: laat <code>Aircraft</code>, <code>AP</code> en een motortype staan dat past bij je vloot als de CSV deze kolommen niet bevat.",
    minimum_required_fields_title: "Minimaal vereiste velden",
    minimum_required_fields_copy: "De converter accepteert kolomaliassen, maar heeft nog steeds minstens nodig:",
    constraint_flight_html: "<strong>Vlucht</strong>: datum, registratie, piloot 1 en totale vliegtuig- of simulatortijd.",
    constraint_route_html: "<strong>Route</strong>: vertrek en aankomst als de rij geen simulatorsessie is.",
    constraint_aircraft_html: "<strong>Vliegtuig</strong>: registratie, fabrikant en model.",
    constraint_pilot_html: "<strong>Piloot</strong>: een achternaam voor elke opgegeven piloot.",
    airport_codes_helper: "Luchthavencodes blijven ongewijzigd in de JSON, maar de app importeert alleen vluchten als die codes al in de luchthaven-database bestaan.",
    result_title: "Resultaat",
    status_no_file: "Geen bestand geladen.",
    summary_rows: "CSV-rijen",
    summary_flights: "Vluchten",
    summary_pilots: "Piloten",
    summary_aircrafts: "Vliegtuigen",
    summary_errors: "Fouten",
    summary_warnings: "Waarschuwingen",
    download_flights: "Flights.json downloaden",
    download_pilots: "Pilots.json downloaden",
    download_aircrafts: "Aircrafts.json downloaden",
    mapping_title: "Kolomkoppeling",
    mapping_copy: "Automatisch herkende kolommen in de geladen CSV.",
    mapping_target_field: "Doelveld",
    mapping_detected_column: "Herkende kolom",
    mapping_status: "Status",
    mapping_placeholder: "Laad een CSV om de herkende koppeling te zien.",
    unused_columns_title: "Niet-herkende kolommen",
    unused_columns_copy: "Handig om onverwachte kolomnamen of typefouten te zien.",
    unused_columns_placeholder: "Geen kolommen om weer te geven.",
    blocking_errors_title: "Blokkerende fouten",
    blocking_errors_copy: "Deze problemen voorkomen dat de JSON-bestanden worden gegenereerd.",
    errors_placeholder: "Nog geen fouten.",
    warnings_title: "Waarschuwingen",
    warnings_copy: "Nuttige informatie die de generatie niet blokkeert.",
    warnings_placeholder: "Nog geen waarschuwingen.",
    preview_title: "JSON-voorbeeld",
    preview_copy: "Eerste item uit elk gegenereerd bestand.",
    status_detected: "Gevonden",
    status_missing: "Ontbreekt",
    status_optional: "Optioneel",
    mapping_not_detected: "niet gevonden",
    mapping_no_data: "Geen gegevens.",
    unused_all_recognized: "Alle kolommen zijn herkend of bewust genegeerd.",
    fatal_unable_analyze: "Kan de CSV niet analyseren.",
    no_errors: "Geen fouten.",
    no_warnings: "Geen waarschuwingen.",
    unknown_error_csv: "Onbekende fout tijdens het lezen van de CSV.",
    csv_empty: "Het CSV-bestand is leeg.",
    loaded_file_fallback: "het geladen bestand",
    error_missing_date_column: "Datumkolom niet gevonden. Voeg iets toe als `date`, `flight_date` of `pilotlog_date`.",
    error_missing_registration_column: "Registratiekolom niet gevonden. Voeg iets toe als `registration`, `tail` of `ac_reg`.",
    error_missing_pilot1_column: "Kolom voor piloot 1 niet gevonden. Voeg iets toe als `pilot1_last_name`, `pilot1_name`, `captain` of `name`.",
    error_missing_manufacturer_column: "Kolom voor fabrikant niet gevonden. Voeg iets toe als `manufact`, `manufacturer` of `aircraft_manufact`.",
    error_missing_model_column: "Kolom voor model niet gevonden. Voeg iets toe als `model`, `aircraft_model` of `modele`.",
    error_missing_total_time_column: "Geen kolom met totale tijd gevonden. Voeg `time_total_aircraft`, `time_total_simulator`, `time_total`, `flight_time` of `Blk Hrs` toe.",
    row_missing_registration: "Rij {lineNumber}: registratie ontbreekt.",
    row_missing_manufacturer: "Rij {lineNumber}: fabrikant ontbreekt voor {registration}.",
    row_missing_model: "Rij {lineNumber}: model ontbreekt voor {registration}.",
    row_invalid_date: "Rij {lineNumber}: ongeldige of lege datum.",
    row_invalid_total_time: "Rij {lineNumber}: ongeldige of ontbrekende totale tijd.",
    row_invalid_times: "Rij {lineNumber}: ongeldige vertrek- of aankomsttijd.",
    row_missing_departure_airport: "Rij {lineNumber}: luchthaven van vertrek ontbreekt.",
    row_missing_arrival_airport: "Rij {lineNumber}: luchthaven van aankomst ontbreekt.",
    row_role_missing_last_name: "Rij {lineNumber}: {role} is opgegeven zonder achternaam.",
    row_pilot1_required: "Rij {lineNumber}: piloot 1 is verplicht.",
    warning_conflicting_pilot_field: "Rij {lineNumber}: conflicterende waarde voor {role} bij {field}; de eerste waarde voor {lastName} blijft behouden.",
    warning_conflicting_aircraft_field: "Rij {lineNumber}: conflicterende vliegtuigwaarde voor {field} bij {registration}; de eerste waarde blijft behouden.",
    status_blocked: "Conversie geblokkeerd voor {fileName}: {errorCount} punt(en) moeten worden gecorrigeerd voor export.",
    status_ready_warnings: "Conversie klaar met {warningCount} waarschuwing(en). Controleer ze voor import in de app.",
    status_ready_success: "Conversie klaar: {flightCount} vlucht(en), {pilotCount} piloot/piloten en {aircraftCount} vliegtuig(en).",
    role_pilot1: "piloot 1",
    role_pilot2: "piloot 2",
    role_pilot3: "piloot 3",
    role_pilot4: "piloot 4",
    pilot_field_firstName: "voornaam",
    pilot_field_company: "bedrijf",
    pilot_field_code: "code",
    pilot_field_phone: "telefoon",
    pilot_field_email: "e-mail",
    aircraft_field_manufact: "fabrikant",
    aircraft_field_model: "model",
    aircraft_field_variant: "variant",
    aircraft_field_typeRating: "typebevoegdheid",
    aircraft_field_company: "bedrijf",
    aircraft_field_notes: "notities",
    aircraft_field_type: "type",
    aircraft_field_simulatorCategory: "simulatorcategorie",
    aircraft_field_aircraftClass: "klasse",
    aircraft_field_engineType: "motortype",
    aircraft_type_aircraft: "Vliegtuig",
    aircraft_type_simulator: "Simulator",
    aircraft_class_ap: "Vliegtuig (AP)",
    aircraft_class_rt: "Rotorcraft (RT)",
    aircraft_class_dr: "Drone (DR)",
    aircraft_class_gl: "Zweefvliegtuig (GL)",
    aircraft_class_ml: "Microlight (ML)",
    aircraft_class_pl: "Powered Lift (PL)",
    aircraft_class_la: "Lichter dan lucht (LA)",
    engine_type_piston: "Zuiger",
    engine_type_turboprop: "Turboprop / as",
    engine_type_jet: "Jet",
    template_sample_remark: "Voorbeeldvlucht"
  },
  pl: {
    page_title: "Konwerter CSV AeroLog",
    eyebrow: "Narzędzia importu AeroLog",
    language_label: "Język",
    hero_title_html: "CSV do <code>Flights.json</code>, <code>Pilots.json</code> i <code>Aircrafts.json</code>",
    hero_copy: "Ta strona odczytuje pojedynczy plik CSV, automatycznie wykrywa znane kolumny, sprawdza minimalne wymagane pola i generuje trzy pliki JSON oczekiwane przez aplikację.",
    choose_csv: "Wybierz plik CSV",
    download_csv_template: "Pobierz szablon CSV",
    output_filenames_html: "Nazwy plików wyjściowych to zawsze <code>Flights.json</code>, <code>Pilots.json</code> i <code>Aircrafts.json</code>.",
    default_settings_title: "Ustawienia domyślne",
    default_settings_copy: "Używane, gdy CSV nie zawiera części danych statku powietrznego.",
    default_type_label: "Typ domyślny",
    default_class_label: "Klasa domyślna",
    default_engine_type_label: "Domyślny typ silnika",
    default_aircraft_company_label: "Domyślna firma statku powietrznego",
    default_pilot_company_label: "Domyślna firma pilota",
    optional_placeholder: "Opcjonalne",
    tip_html: "Wskazówka: pozostaw <code>Aircraft</code>, <code>AP</code> i typ silnika pasujący do floty, jeśli CSV nie zawiera tych kolumn.",
    minimum_required_fields_title: "Minimalnie wymagane pola",
    minimum_required_fields_copy: "Konwerter akceptuje aliasy kolumn, ale nadal potrzebuje co najmniej:",
    constraint_flight_html: "<strong>Lot</strong>: data, rejestracja, pilot 1 i całkowity czas samolotu lub symulatora.",
    constraint_route_html: "<strong>Trasa</strong>: odlot i przylot, jeśli wiersz nie dotyczy sesji symulatora.",
    constraint_aircraft_html: "<strong>Statek powietrzny</strong>: rejestracja, producent i model.",
    constraint_pilot_html: "<strong>Pilot</strong>: nazwisko dla każdego podanego pilota.",
    airport_codes_helper: "Kody lotnisk pozostają bez zmian w JSON, ale aplikacja zaimportuje loty tylko wtedy, gdy kody już istnieją w bazie lotnisk.",
    result_title: "Wynik",
    status_no_file: "Nie wczytano pliku.",
    summary_rows: "Wiersze CSV",
    summary_flights: "Loty",
    summary_pilots: "Piloci",
    summary_aircrafts: "Statki powietrzne",
    summary_errors: "Błędy",
    summary_warnings: "Ostrzeżenia",
    download_flights: "Pobierz Flights.json",
    download_pilots: "Pobierz Pilots.json",
    download_aircrafts: "Pobierz Aircrafts.json",
    mapping_title: "Mapowanie kolumn",
    mapping_copy: "Kolumny rozpoznane automatycznie we wczytanym CSV.",
    mapping_target_field: "Pole docelowe",
    mapping_detected_column: "Wykryta kolumna",
    mapping_status: "Status",
    mapping_placeholder: "Wczytaj CSV, aby zobaczyć wykryte mapowanie.",
    unused_columns_title: "Nierozpoznane kolumny",
    unused_columns_copy: "Przydatne do wychwycenia nieoczekiwanych nazw lub literówek.",
    unused_columns_placeholder: "Brak kolumn do wyświetlenia.",
    blocking_errors_title: "Błędy blokujące",
    blocking_errors_copy: "Te problemy uniemożliwiają wygenerowanie plików JSON.",
    errors_placeholder: "Brak błędów.",
    warnings_title: "Ostrzeżenia",
    warnings_copy: "Przydatne informacje, które nie blokują generowania.",
    warnings_placeholder: "Brak ostrzeżeń.",
    preview_title: "Podgląd JSON",
    preview_copy: "Pierwszy element każdego wygenerowanego pliku.",
    status_detected: "Wykryto",
    status_missing: "Brak",
    status_optional: "Opcjonalne",
    mapping_not_detected: "nie wykryto",
    mapping_no_data: "Brak danych.",
    unused_all_recognized: "Wszystkie kolumny zostały rozpoznane lub celowo zignorowane.",
    fatal_unable_analyze: "Nie udało się przeanalizować CSV.",
    no_errors: "Brak błędów.",
    no_warnings: "Brak ostrzeżeń.",
    unknown_error_csv: "Nieznany błąd podczas odczytu CSV.",
    csv_empty: "Plik CSV jest pusty.",
    loaded_file_fallback: "wczytany plik",
    error_missing_date_column: "Nie znaleziono kolumny z datą. Dodaj np. `date`, `flight_date` lub `pilotlog_date`.",
    error_missing_registration_column: "Nie znaleziono kolumny rejestracji. Dodaj np. `registration`, `tail` lub `ac_reg`.",
    error_missing_pilot1_column: "Nie znaleziono kolumny pilota 1. Dodaj np. `pilot1_last_name`, `pilot1_name`, `captain` lub `name`.",
    error_missing_manufacturer_column: "Nie znaleziono kolumny producenta. Dodaj np. `manufact`, `manufacturer` lub `aircraft_manufact`.",
    error_missing_model_column: "Nie znaleziono kolumny modelu. Dodaj np. `model`, `aircraft_model` lub `modele`.",
    error_missing_total_time_column: "Nie wykryto kolumny czasu całkowitego. Dodaj `time_total_aircraft`, `time_total_simulator`, `time_total`, `flight_time` lub `Blk Hrs`.",
    row_missing_registration: "Wiersz {lineNumber}: brak rejestracji.",
    row_missing_manufacturer: "Wiersz {lineNumber}: brak producenta dla {registration}.",
    row_missing_model: "Wiersz {lineNumber}: brak modelu dla {registration}.",
    row_invalid_date: "Wiersz {lineNumber}: nieprawidłowa lub pusta data.",
    row_invalid_total_time: "Wiersz {lineNumber}: brak lub nieprawidłowy czas całkowity.",
    row_invalid_times: "Wiersz {lineNumber}: nieprawidłowa godzina odlotu lub przylotu.",
    row_missing_departure_airport: "Wiersz {lineNumber}: brak lotniska odlotu.",
    row_missing_arrival_airport: "Wiersz {lineNumber}: brak lotniska przylotu.",
    row_role_missing_last_name: "Wiersz {lineNumber}: {role} podano bez nazwiska.",
    row_pilot1_required: "Wiersz {lineNumber}: pilot 1 jest wymagany.",
    warning_conflicting_pilot_field: "Wiersz {lineNumber}: sprzeczna wartość {role} dla pola {field}; zachowano pierwszą wartość dla {lastName}.",
    warning_conflicting_aircraft_field: "Wiersz {lineNumber}: sprzeczna wartość statku powietrznego dla pola {field} w {registration}; zachowano pierwszą wartość.",
    status_blocked: "Konwersja zablokowana dla {fileName}: przed eksportem trzeba poprawić {errorCount} problem(y).",
    status_ready_warnings: "Konwersja gotowa z {warningCount} ostrzeżeniem/ostrzeżeniami. Sprawdź je przed importem do aplikacji.",
    status_ready_success: "Konwersja gotowa: {flightCount} lot(y), {pilotCount} pilot(ów) i {aircraftCount} statek/statki powietrzne.",
    role_pilot1: "pilot 1",
    role_pilot2: "pilot 2",
    role_pilot3: "pilot 3",
    role_pilot4: "pilot 4",
    pilot_field_firstName: "imię",
    pilot_field_company: "firma",
    pilot_field_code: "kod",
    pilot_field_phone: "telefon",
    pilot_field_email: "e-mail",
    aircraft_field_manufact: "producent",
    aircraft_field_model: "model",
    aircraft_field_variant: "wariant",
    aircraft_field_typeRating: "uprawnienie na typ",
    aircraft_field_company: "firma",
    aircraft_field_notes: "notatki",
    aircraft_field_type: "typ",
    aircraft_field_simulatorCategory: "kategoria symulatora",
    aircraft_field_aircraftClass: "klasa",
    aircraft_field_engineType: "typ silnika",
    aircraft_type_aircraft: "Statek powietrzny",
    aircraft_type_simulator: "Symulator",
    aircraft_class_ap: "Samolot (AP)",
    aircraft_class_rt: "Rotorcraft (RT)",
    aircraft_class_dr: "Dron (DR)",
    aircraft_class_gl: "Szybowiec (GL)",
    aircraft_class_ml: "Microlight (ML)",
    aircraft_class_pl: "Powered Lift (PL)",
    aircraft_class_la: "Lżejszy od powietrza (LA)",
    engine_type_piston: "Tłokowy",
    engine_type_turboprop: "Turbośmigłowy / wał",
    engine_type_jet: "Odrzutowy",
    template_sample_remark: "Przykładowy lot"
  },
  tr: {
    page_title: "AeroLog CSV Dönüştürücü",
    eyebrow: "AeroLog içe aktarma araçları",
    language_label: "Dil",
    hero_title_html: "CSV'den <code>Flights.json</code>, <code>Pilots.json</code> ve <code>Aircrafts.json</code>",
    hero_copy: "Bu sayfa tek bir CSV dosyasını okur, bilinen sütunları otomatik algılar, gerekli asgari alanları doğrular ve uygulamanın beklediği üç JSON dosyasını üretir.",
    choose_csv: "CSV seç",
    download_csv_template: "CSV şablonunu indir",
    output_filenames_html: "Çıktı dosya adları her zaman <code>Flights.json</code>, <code>Pilots.json</code> ve <code>Aircrafts.json</code> olur.",
    default_settings_title: "Varsayılan ayarlar",
    default_settings_copy: "CSV bazı uçak ayrıntılarını vermediğinde kullanılır.",
    default_type_label: "Varsayılan tür",
    default_class_label: "Varsayılan sınıf",
    default_engine_type_label: "Varsayılan motor türü",
    default_aircraft_company_label: "Varsayılan uçak şirketi",
    default_pilot_company_label: "Varsayılan pilot şirketi",
    optional_placeholder: "İsteğe bağlı",
    tip_html: "İpucu: CSV bu sütunları içermiyorsa <code>Aircraft</code>, <code>AP</code> ve filonuzla uyumlu bir motor türünü koruyun.",
    minimum_required_fields_title: "Asgari gerekli alanlar",
    minimum_required_fields_copy: "Dönüştürücü sütun takma adlarını kabul eder, ancak yine de en az şunlara ihtiyaç duyar:",
    constraint_flight_html: "<strong>Uçuş</strong>: tarih, tescil, pilot 1 ve toplam uçak veya simülatör süresi.",
    constraint_route_html: "<strong>Rota</strong>: satır bir simülatör oturumu değilse kalkış ve varış.",
    constraint_aircraft_html: "<strong>Uçak</strong>: tescil, üretici ve model.",
    constraint_pilot_html: "<strong>Pilot</strong>: verilen her pilot için bir soyadı.",
    airport_codes_helper: "Havalimanı kodları JSON'da olduğu gibi tutulur, ancak uygulama bu kodlar havalimanı veritabanında zaten varsa uçuşları içe aktarır.",
    result_title: "Sonuç",
    status_no_file: "Dosya yüklenmedi.",
    summary_rows: "CSV satırları",
    summary_flights: "Uçuşlar",
    summary_pilots: "Pilotlar",
    summary_aircrafts: "Uçaklar",
    summary_errors: "Hatalar",
    summary_warnings: "Uyarılar",
    download_flights: "Flights.json indir",
    download_pilots: "Pilots.json indir",
    download_aircrafts: "Aircrafts.json indir",
    mapping_title: "Sütun eşleme",
    mapping_copy: "Yüklenen CSV içindeki otomatik tanınan sütunlar.",
    mapping_target_field: "Hedef alan",
    mapping_detected_column: "Algılanan sütun",
    mapping_status: "Durum",
    mapping_placeholder: "Algılanan eşlemeyi görmek için bir CSV yükleyin.",
    unused_columns_title: "Tanınmayan sütunlar",
    unused_columns_copy: "Beklenmeyen sütun adlarını veya yazım hatalarını fark etmek için yararlı.",
    unused_columns_placeholder: "Gösterilecek sütun yok.",
    blocking_errors_title: "Engelleyici hatalar",
    blocking_errors_copy: "Bu sorunlar JSON dosyalarının oluşturulmasını engeller.",
    errors_placeholder: "Henüz hata yok.",
    warnings_title: "Uyarılar",
    warnings_copy: "Oluşturmayı engellemeyen yararlı bilgiler.",
    warnings_placeholder: "Henüz uyarı yok.",
    preview_title: "JSON önizleme",
    preview_copy: "Oluşturulan her dosyanın ilk öğesi.",
    status_detected: "Algılandı",
    status_missing: "Eksik",
    status_optional: "İsteğe bağlı",
    mapping_not_detected: "algılanmadı",
    mapping_no_data: "Veri yok.",
    unused_all_recognized: "Tüm sütunlar tanındı veya bilerek yok sayıldı.",
    fatal_unable_analyze: "CSV analiz edilemedi.",
    no_errors: "Hata yok.",
    no_warnings: "Uyarı yok.",
    unknown_error_csv: "CSV okunurken bilinmeyen hata.",
    csv_empty: "CSV dosyası boş.",
    loaded_file_fallback: "yüklenen dosya",
    error_missing_date_column: "Tarih sütunu bulunamadı. `date`, `flight_date` veya `pilotlog_date` gibi bir ad ekleyin.",
    error_missing_registration_column: "Tescil sütunu bulunamadı. `registration`, `tail` veya `ac_reg` gibi bir ad ekleyin.",
    error_missing_pilot1_column: "Pilot 1 sütunu bulunamadı. `pilot1_last_name`, `pilot1_name`, `captain` veya `name` gibi bir ad ekleyin.",
    error_missing_manufacturer_column: "Üretici sütunu bulunamadı. `manufact`, `manufacturer` veya `aircraft_manufact` gibi bir ad ekleyin.",
    error_missing_model_column: "Model sütunu bulunamadı. `model`, `aircraft_model` veya `modele` gibi bir ad ekleyin.",
    error_missing_total_time_column: "Toplam süre sütunu algılanmadı. `time_total_aircraft`, `time_total_simulator`, `time_total`, `flight_time` veya `Blk Hrs` ekleyin.",
    row_missing_registration: "Satır {lineNumber}: tescil eksik.",
    row_missing_manufacturer: "Satır {lineNumber}: {registration} için üretici eksik.",
    row_missing_model: "Satır {lineNumber}: {registration} için model eksik.",
    row_invalid_date: "Satır {lineNumber}: tarih boş veya geçersiz.",
    row_invalid_total_time: "Satır {lineNumber}: toplam süre eksik veya geçersiz.",
    row_invalid_times: "Satır {lineNumber}: kalkış veya varış saati geçersiz.",
    row_missing_departure_airport: "Satır {lineNumber}: kalkış havalimanı eksik.",
    row_missing_arrival_airport: "Satır {lineNumber}: varış havalimanı eksik.",
    row_role_missing_last_name: "Satır {lineNumber}: {role} soyadı olmadan verilmiş.",
    row_pilot1_required: "Satır {lineNumber}: pilot 1 zorunludur.",
    warning_conflicting_pilot_field: "Satır {lineNumber}: {role} için {field} alanında çelişkili değer; {lastName} için ilk değer korunuyor.",
    warning_conflicting_aircraft_field: "Satır {lineNumber}: {registration} için {field} alanında çelişkili uçak değeri; ilk değer korunuyor.",
    status_blocked: "{fileName} için dönüşüm engellendi: dışa aktarmadan önce {errorCount} sorun düzeltilmeli.",
    status_ready_warnings: "{warningCount} uyarı ile dönüşüm hazır. Uygulamaya aktarmadan önce gözden geçirin.",
    status_ready_success: "Dönüşüm hazır: {flightCount} uçuş, {pilotCount} pilot ve {aircraftCount} uçak kaydı.",
    role_pilot1: "pilot 1",
    role_pilot2: "pilot 2",
    role_pilot3: "pilot 3",
    role_pilot4: "pilot 4",
    pilot_field_firstName: "ad",
    pilot_field_company: "şirket",
    pilot_field_code: "kod",
    pilot_field_phone: "telefon",
    pilot_field_email: "e-posta",
    aircraft_field_manufact: "üretici",
    aircraft_field_model: "model",
    aircraft_field_variant: "varyant",
    aircraft_field_typeRating: "tip yetkisi",
    aircraft_field_company: "şirket",
    aircraft_field_notes: "notlar",
    aircraft_field_type: "tür",
    aircraft_field_simulatorCategory: "simülatör kategorisi",
    aircraft_field_aircraftClass: "sınıf",
    aircraft_field_engineType: "motor türü",
    aircraft_type_aircraft: "Uçak",
    aircraft_type_simulator: "Simülatör",
    aircraft_class_ap: "Uçak (AP)",
    aircraft_class_rt: "Rotorcraft (RT)",
    aircraft_class_dr: "Drone (DR)",
    aircraft_class_gl: "Planör (GL)",
    aircraft_class_ml: "Microlight (ML)",
    aircraft_class_pl: "Powered Lift (PL)",
    aircraft_class_la: "Havadan hafif (LA)",
    engine_type_piston: "Piston",
    engine_type_turboprop: "Turboprop / şaft",
    engine_type_jet: "Jet",
    template_sample_remark: "Örnek uçuş"
  },
  ru: {
    page_title: "Конвертер CSV AeroLog",
    eyebrow: "Инструменты импорта AeroLog",
    language_label: "Язык",
    hero_title_html: "CSV в <code>Flights.json</code>, <code>Pilots.json</code> и <code>Aircrafts.json</code>",
    hero_copy: "Эта страница читает один CSV-файл, автоматически распознает известные столбцы, проверяет минимально обязательные поля и формирует три JSON-файла, ожидаемые приложением.",
    choose_csv: "Выбрать CSV",
    download_csv_template: "Скачать шаблон CSV",
    output_filenames_html: "Имена выходных файлов всегда: <code>Flights.json</code>, <code>Pilots.json</code> и <code>Aircrafts.json</code>.",
    default_settings_title: "Значения по умолчанию",
    default_settings_copy: "Используются, если CSV не содержит некоторых данных о воздушном судне.",
    default_type_label: "Тип по умолчанию",
    default_class_label: "Класс по умолчанию",
    default_engine_type_label: "Тип двигателя по умолчанию",
    default_aircraft_company_label: "Компания ВС по умолчанию",
    default_pilot_company_label: "Компания пилота по умолчанию",
    optional_placeholder: "Необязательно",
    tip_html: "Подсказка: оставьте <code>Aircraft</code>, <code>AP</code> и тип двигателя, соответствующий вашему флоту, если в CSV нет этих столбцов.",
    minimum_required_fields_title: "Минимально обязательные поля",
    minimum_required_fields_copy: "Конвертер принимает псевдонимы столбцов, но ему все равно требуется как минимум:",
    constraint_flight_html: "<strong>Полет</strong>: дата, регистрация, пилот 1 и общее время самолета или симулятора.",
    constraint_route_html: "<strong>Маршрут</strong>: вылет и прилет, если строка не относится к сессии симулятора.",
    constraint_aircraft_html: "<strong>Воздушное судно</strong>: регистрация, производитель и модель.",
    constraint_pilot_html: "<strong>Пилот</strong>: фамилия для каждого указанного пилота.",
    airport_codes_helper: "Коды аэропортов сохраняются в JSON как есть, но приложение импортирует полеты только если эти коды уже существуют в его базе аэропортов.",
    result_title: "Результат",
    status_no_file: "Файл не загружен.",
    summary_rows: "Строки CSV",
    summary_flights: "Полеты",
    summary_pilots: "Пилоты",
    summary_aircrafts: "ВС",
    summary_errors: "Ошибки",
    summary_warnings: "Предупреждения",
    download_flights: "Скачать Flights.json",
    download_pilots: "Скачать Pilots.json",
    download_aircrafts: "Скачать Aircrafts.json",
    mapping_title: "Сопоставление столбцов",
    mapping_copy: "Столбцы, автоматически распознанные во загруженном CSV.",
    mapping_target_field: "Целевое поле",
    mapping_detected_column: "Распознанный столбец",
    mapping_status: "Статус",
    mapping_placeholder: "Загрузите CSV, чтобы увидеть распознанное сопоставление.",
    unused_columns_title: "Нераспознанные столбцы",
    unused_columns_copy: "Полезно для поиска неожиданных имен столбцов или опечаток.",
    unused_columns_placeholder: "Нет столбцов для отображения.",
    blocking_errors_title: "Блокирующие ошибки",
    blocking_errors_copy: "Эти проблемы не позволяют сформировать JSON-файлы.",
    errors_placeholder: "Ошибок пока нет.",
    warnings_title: "Предупреждения",
    warnings_copy: "Полезная информация, которая не блокирует генерацию.",
    warnings_placeholder: "Предупреждений пока нет.",
    preview_title: "Предпросмотр JSON",
    preview_copy: "Первый элемент каждого сформированного файла.",
    status_detected: "Найдено",
    status_missing: "Отсутствует",
    status_optional: "Необязательно",
    mapping_not_detected: "не найдено",
    mapping_no_data: "Нет данных.",
    unused_all_recognized: "Все столбцы были распознаны или намеренно проигнорированы.",
    fatal_unable_analyze: "Не удалось проанализировать CSV.",
    no_errors: "Ошибок нет.",
    no_warnings: "Предупреждений нет.",
    unknown_error_csv: "Неизвестная ошибка при чтении CSV.",
    csv_empty: "CSV-файл пуст.",
    loaded_file_fallback: "загруженный файл",
    error_missing_date_column: "Столбец даты не найден. Добавьте что-то вроде `date`, `flight_date` или `pilotlog_date`.",
    error_missing_registration_column: "Столбец регистрации не найден. Добавьте что-то вроде `registration`, `tail` или `ac_reg`.",
    error_missing_pilot1_column: "Столбец пилота 1 не найден. Добавьте что-то вроде `pilot1_last_name`, `pilot1_name`, `captain` или `name`.",
    error_missing_manufacturer_column: "Столбец производителя не найден. Добавьте что-то вроде `manufact`, `manufacturer` или `aircraft_manufact`.",
    error_missing_model_column: "Столбец модели не найден. Добавьте что-то вроде `model`, `aircraft_model` или `modele`.",
    error_missing_total_time_column: "Столбец общего времени не найден. Добавьте `time_total_aircraft`, `time_total_simulator`, `time_total`, `flight_time` или `Blk Hrs`.",
    row_missing_registration: "Строка {lineNumber}: отсутствует регистрация.",
    row_missing_manufacturer: "Строка {lineNumber}: отсутствует производитель для {registration}.",
    row_missing_model: "Строка {lineNumber}: отсутствует модель для {registration}.",
    row_invalid_date: "Строка {lineNumber}: дата пуста или неверна.",
    row_invalid_total_time: "Строка {lineNumber}: общее время отсутствует или неверно.",
    row_invalid_times: "Строка {lineNumber}: неверное время вылета или прилета.",
    row_missing_departure_airport: "Строка {lineNumber}: отсутствует аэропорт вылета.",
    row_missing_arrival_airport: "Строка {lineNumber}: отсутствует аэропорт прилета.",
    row_role_missing_last_name: "Строка {lineNumber}: для {role} не указана фамилия.",
    row_pilot1_required: "Строка {lineNumber}: пилот 1 обязателен.",
    warning_conflicting_pilot_field: "Строка {lineNumber}: конфликтующее значение {role} для поля {field}; сохранено первое значение для {lastName}.",
    warning_conflicting_aircraft_field: "Строка {lineNumber}: конфликтующее значение ВС для поля {field} у {registration}; сохранено первое значение.",
    status_blocked: "Конвертация заблокирована для {fileName}: перед экспортом нужно исправить {errorCount} проблем(ы).",
    status_ready_warnings: "Конвертация готова с {warningCount} предупреждением(ями). Проверьте их перед импортом в приложение.",
    status_ready_success: "Конвертация готова: {flightCount} полет(ов), {pilotCount} пилот(ов) и {aircraftCount} запись(ей) по ВС.",
    role_pilot1: "пилот 1",
    role_pilot2: "пилот 2",
    role_pilot3: "пилот 3",
    role_pilot4: "пилот 4",
    pilot_field_firstName: "имя",
    pilot_field_company: "компания",
    pilot_field_code: "код",
    pilot_field_phone: "телефон",
    pilot_field_email: "электронная почта",
    aircraft_field_manufact: "производитель",
    aircraft_field_model: "модель",
    aircraft_field_variant: "вариант",
    aircraft_field_typeRating: "допуск на тип",
    aircraft_field_company: "компания",
    aircraft_field_notes: "заметки",
    aircraft_field_type: "тип",
    aircraft_field_simulatorCategory: "категория симулятора",
    aircraft_field_aircraftClass: "класс",
    aircraft_field_engineType: "тип двигателя",
    aircraft_type_aircraft: "Воздушное судно",
    aircraft_type_simulator: "Симулятор",
    aircraft_class_ap: "Самолет (AP)",
    aircraft_class_rt: "Винтокрылый (RT)",
    aircraft_class_dr: "Дрон (DR)",
    aircraft_class_gl: "Планер (GL)",
    aircraft_class_ml: "Сверхлегкий (ML)",
    aircraft_class_pl: "Powered Lift (PL)",
    aircraft_class_la: "Легче воздуха (LA)",
    engine_type_piston: "Поршневой",
    engine_type_turboprop: "Турбовинтовой / вал",
    engine_type_jet: "Реактивный",
    template_sample_remark: "Пример полета"
  },
  ar: {
    page_title: "محول CSV من AeroLog",
    eyebrow: "أدوات استيراد AeroLog",
    language_label: "اللغة",
    hero_title_html: "من CSV إلى <code>Flights.json</code> و<code>Pilots.json</code> و<code>Aircrafts.json</code>",
    hero_copy: "تقرأ هذه الصفحة ملف CSV واحدًا، وتتعرف تلقائيًا على الأعمدة المعروفة، وتتحقق من الحد الأدنى من الحقول المطلوبة، ثم تنشئ ملفات JSON الثلاثة التي يتوقعها التطبيق.",
    choose_csv: "اختر ملف CSV",
    download_csv_template: "تنزيل قالب CSV",
    output_filenames_html: "أسماء ملفات الإخراج تكون دائمًا <code>Flights.json</code> و<code>Pilots.json</code> و<code>Aircrafts.json</code>.",
    default_settings_title: "الإعدادات الافتراضية",
    default_settings_copy: "تُستخدم عندما لا يوفر ملف CSV بعض تفاصيل الطائرة.",
    default_type_label: "النوع الافتراضي",
    default_class_label: "الفئة الافتراضية",
    default_engine_type_label: "نوع المحرك الافتراضي",
    default_aircraft_company_label: "شركة الطائرة الافتراضية",
    default_pilot_company_label: "شركة الطيار الافتراضية",
    optional_placeholder: "اختياري",
    tip_html: "نصيحة: أبقِ <code>Aircraft</code> و<code>AP</code> ونوع محرك مناسبًا لأسطولك إذا لم يتضمن CSV هذه الأعمدة.",
    minimum_required_fields_title: "الحد الأدنى من الحقول المطلوبة",
    minimum_required_fields_copy: "تقبل الأداة أسماء أعمدة بديلة، لكنها ما زالت تحتاج على الأقل إلى:",
    constraint_flight_html: "<strong>الرحلة</strong>: التاريخ، التسجيل، الطيار 1، وإجمالي وقت الطائرة أو المحاكي.",
    constraint_route_html: "<strong>المسار</strong>: المغادرة والوصول إذا لم يكن الصف جلسة محاكاة.",
    constraint_aircraft_html: "<strong>الطائرة</strong>: التسجيل، الشركة المصنعة، والطراز.",
    constraint_pilot_html: "<strong>الطيار</strong>: اسم عائلة لكل طيار تم إدخاله.",
    airport_codes_helper: "تُحفظ رموز المطارات كما هي في JSON، لكن التطبيق سيستورد الرحلات فقط إذا كانت هذه الرموز موجودة بالفعل في قاعدة بيانات المطارات.",
    result_title: "النتيجة",
    status_no_file: "لم يتم تحميل ملف.",
    summary_rows: "صفوف CSV",
    summary_flights: "الرحلات",
    summary_pilots: "الطيارون",
    summary_aircrafts: "الطائرات",
    summary_errors: "الأخطاء",
    summary_warnings: "التحذيرات",
    download_flights: "تنزيل Flights.json",
    download_pilots: "تنزيل Pilots.json",
    download_aircrafts: "تنزيل Aircrafts.json",
    mapping_title: "مطابقة الأعمدة",
    mapping_copy: "الأعمدة التي تم التعرف عليها تلقائيًا في ملف CSV المحمّل.",
    mapping_target_field: "الحقل الهدف",
    mapping_detected_column: "العمود المكتشف",
    mapping_status: "الحالة",
    mapping_placeholder: "حمّل ملف CSV لرؤية المطابقة المكتشفة.",
    unused_columns_title: "أعمدة غير معروفة",
    unused_columns_copy: "مفيد لاكتشاف أسماء أعمدة غير متوقعة أو أخطاء إملائية.",
    unused_columns_placeholder: "لا توجد أعمدة للعرض.",
    blocking_errors_title: "أخطاء مانعة",
    blocking_errors_copy: "هذه المشكلات تمنع إنشاء ملفات JSON.",
    errors_placeholder: "لا توجد أخطاء بعد.",
    warnings_title: "تحذيرات",
    warnings_copy: "معلومات مفيدة لا تمنع الإنشاء.",
    warnings_placeholder: "لا توجد تحذيرات بعد.",
    preview_title: "معاينة JSON",
    preview_copy: "أول عنصر من كل ملف تم إنشاؤه.",
    status_detected: "تم الاكتشاف",
    status_missing: "مفقود",
    status_optional: "اختياري",
    mapping_not_detected: "غير مكتشف",
    mapping_no_data: "لا توجد بيانات.",
    unused_all_recognized: "تم التعرف على جميع الأعمدة أو تجاهلها عمدًا.",
    fatal_unable_analyze: "تعذر تحليل ملف CSV.",
    no_errors: "لا توجد أخطاء.",
    no_warnings: "لا توجد تحذيرات.",
    unknown_error_csv: "خطأ غير معروف أثناء قراءة CSV.",
    csv_empty: "ملف CSV فارغ.",
    loaded_file_fallback: "الملف المحمّل",
    error_missing_date_column: "لم يتم العثور على عمود التاريخ. أضف اسمًا مثل `date` أو `flight_date` أو `pilotlog_date`.",
    error_missing_registration_column: "لم يتم العثور على عمود التسجيل. أضف اسمًا مثل `registration` أو `tail` أو `ac_reg`.",
    error_missing_pilot1_column: "لم يتم العثور على عمود الطيار 1. أضف اسمًا مثل `pilot1_last_name` أو `pilot1_name` أو `captain` أو `name`.",
    error_missing_manufacturer_column: "لم يتم العثور على عمود الشركة المصنعة. أضف اسمًا مثل `manufact` أو `manufacturer` أو `aircraft_manufact`.",
    error_missing_model_column: "لم يتم العثور على عمود الطراز. أضف اسمًا مثل `model` أو `aircraft_model` أو `modele`.",
    error_missing_total_time_column: "لم يتم اكتشاف عمود الوقت الإجمالي. أضف `time_total_aircraft` أو `time_total_simulator` أو `time_total` أو `flight_time` أو `Blk Hrs`.",
    row_missing_registration: "السطر {lineNumber}: التسجيل مفقود.",
    row_missing_manufacturer: "السطر {lineNumber}: الشركة المصنعة مفقودة لـ {registration}.",
    row_missing_model: "السطر {lineNumber}: الطراز مفقود لـ {registration}.",
    row_invalid_date: "السطر {lineNumber}: التاريخ فارغ أو غير صالح.",
    row_invalid_total_time: "السطر {lineNumber}: الوقت الإجمالي مفقود أو غير صالح.",
    row_invalid_times: "السطر {lineNumber}: وقت المغادرة أو الوصول غير صالح.",
    row_missing_departure_airport: "السطر {lineNumber}: مطار المغادرة مفقود.",
    row_missing_arrival_airport: "السطر {lineNumber}: مطار الوصول مفقود.",
    row_role_missing_last_name: "السطر {lineNumber}: تم إدخال {role} بدون اسم عائلة.",
    row_pilot1_required: "السطر {lineNumber}: الطيار 1 مطلوب.",
    warning_conflicting_pilot_field: "السطر {lineNumber}: قيمة متعارضة لـ {role} في {field}؛ سيتم الاحتفاظ بأول قيمة لـ {lastName}.",
    warning_conflicting_aircraft_field: "السطر {lineNumber}: قيمة طائرة متعارضة في {field} لـ {registration}؛ سيتم الاحتفاظ بأول قيمة.",
    status_blocked: "تم إيقاف التحويل للملف {fileName}: يجب تصحيح {errorCount} مشكلة قبل التصدير.",
    status_ready_warnings: "التحويل جاهز مع {warningCount} تحذيرًا. راجعها قبل الاستيراد إلى التطبيق.",
    status_ready_success: "التحويل جاهز: {flightCount} رحلة، و{pilotCount} طيار، و{aircraftCount} سجل طائرة.",
    role_pilot1: "الطيار 1",
    role_pilot2: "الطيار 2",
    role_pilot3: "الطيار 3",
    role_pilot4: "الطيار 4",
    pilot_field_firstName: "الاسم الأول",
    pilot_field_company: "الشركة",
    pilot_field_code: "الرمز",
    pilot_field_phone: "الهاتف",
    pilot_field_email: "البريد الإلكتروني",
    aircraft_field_manufact: "الشركة المصنعة",
    aircraft_field_model: "الطراز",
    aircraft_field_variant: "الإصدار",
    aircraft_field_typeRating: "تصنيف النوع",
    aircraft_field_company: "الشركة",
    aircraft_field_notes: "ملاحظات",
    aircraft_field_type: "النوع",
    aircraft_field_simulatorCategory: "فئة المحاكي",
    aircraft_field_aircraftClass: "الفئة",
    aircraft_field_engineType: "نوع المحرك",
    aircraft_type_aircraft: "طائرة",
    aircraft_type_simulator: "محاكي",
    aircraft_class_ap: "طائرة (AP)",
    aircraft_class_rt: "طائرة دوارة (RT)",
    aircraft_class_dr: "طائرة بدون طيار (DR)",
    aircraft_class_gl: "طائرة شراعية (GL)",
    aircraft_class_ml: "خفيفة جدًا (ML)",
    aircraft_class_pl: "رفع بمحرك (PL)",
    aircraft_class_la: "أخف من الهواء (LA)",
    engine_type_piston: "مكبسي",
    engine_type_turboprop: "توربيني مروحي / عمود",
    engine_type_jet: "نفاث",
    template_sample_remark: "رحلة تجريبية"
  },
  hi: {
    page_title: "AeroLog CSV कन्वर्टर",
    eyebrow: "AeroLog आयात उपकरण",
    language_label: "भाषा",
    hero_title_html: "CSV से <code>Flights.json</code>, <code>Pilots.json</code> और <code>Aircrafts.json</code>",
    hero_copy: "यह पेज एक CSV फ़ाइल पढ़ता है, ज्ञात कॉलम अपने आप पहचानता है, न्यूनतम आवश्यक फ़ील्ड जाँचता है और ऐप के लिए अपेक्षित तीन JSON फ़ाइलें बनाता है।",
    choose_csv: "CSV चुनें",
    download_csv_template: "CSV टेम्पलेट डाउनलोड करें",
    output_filenames_html: "आउटपुट फ़ाइलों के नाम हमेशा <code>Flights.json</code>, <code>Pilots.json</code> और <code>Aircrafts.json</code> ही रहते हैं।",
    default_settings_title: "डिफ़ॉल्ट सेटिंग्स",
    default_settings_copy: "जब CSV कुछ विमान विवरण नहीं देता तब उपयोग होता है।",
    default_type_label: "डिफ़ॉल्ट प्रकार",
    default_class_label: "डिफ़ॉल्ट वर्ग",
    default_engine_type_label: "डिफ़ॉल्ट इंजन प्रकार",
    default_aircraft_company_label: "डिफ़ॉल्ट विमान कंपनी",
    default_pilot_company_label: "डिफ़ॉल्ट पायलट कंपनी",
    optional_placeholder: "वैकल्पिक",
    tip_html: "सुझाव: अगर CSV में ये कॉलम नहीं हैं, तो <code>Aircraft</code>, <code>AP</code> और अपने बेड़े से मेल खाता इंजन प्रकार बनाए रखें।",
    minimum_required_fields_title: "न्यूनतम आवश्यक फ़ील्ड",
    minimum_required_fields_copy: "कन्वर्टर कॉलम उपनाम स्वीकार करता है, लेकिन फिर भी कम से कम यह चाहिए:",
    constraint_flight_html: "<strong>उड़ान</strong>: तारीख, रजिस्ट्रेशन, पायलट 1 और कुल विमान या सिम्युलेटर समय।",
    constraint_route_html: "<strong>मार्ग</strong>: प्रस्थान और आगमन, यदि पंक्ति सिम्युलेटर सत्र नहीं है।",
    constraint_aircraft_html: "<strong>विमान</strong>: रजिस्ट्रेशन, निर्माता और मॉडल।",
    constraint_pilot_html: "<strong>पायलट</strong>: दिए गए हर पायलट के लिए एक उपनाम।",
    airport_codes_helper: "एयरपोर्ट कोड JSON में वैसे ही रहते हैं, लेकिन ऐप उड़ानें तभी आयात करेगा जब वे कोड उसके एयरपोर्ट डेटाबेस में पहले से मौजूद हों।",
    result_title: "परिणाम",
    status_no_file: "कोई फ़ाइल लोड नहीं हुई।",
    summary_rows: "CSV पंक्तियाँ",
    summary_flights: "उड़ानें",
    summary_pilots: "पायलट",
    summary_aircrafts: "विमान",
    summary_errors: "त्रुटियाँ",
    summary_warnings: "चेतावनियाँ",
    download_flights: "Flights.json डाउनलोड करें",
    download_pilots: "Pilots.json डाउनलोड करें",
    download_aircrafts: "Aircrafts.json डाउनलोड करें",
    mapping_title: "कॉलम मैपिंग",
    mapping_copy: "लोड की गई CSV में अपने आप पहचाने गए कॉलम।",
    mapping_target_field: "लक्ष्य फ़ील्ड",
    mapping_detected_column: "पहचाना गया कॉलम",
    mapping_status: "स्थिति",
    mapping_placeholder: "पहचानी गई मैपिंग देखने के लिए CSV लोड करें।",
    unused_columns_title: "अपरिचित कॉलम",
    unused_columns_copy: "अनपेक्षित कॉलम नाम या टाइपो पकड़ने में मददगार।",
    unused_columns_placeholder: "दिखाने के लिए कोई कॉलम नहीं।",
    blocking_errors_title: "रोकने वाली त्रुटियाँ",
    blocking_errors_copy: "ये समस्याएँ JSON फ़ाइलें बनने से रोकती हैं।",
    errors_placeholder: "अभी कोई त्रुटि नहीं।",
    warnings_title: "चेतावनियाँ",
    warnings_copy: "उपयोगी जानकारी जो जनरेशन को नहीं रोकती।",
    warnings_placeholder: "अभी कोई चेतावनी नहीं।",
    preview_title: "JSON पूर्वावलोकन",
    preview_copy: "हर बनाई गई फ़ाइल का पहला आइटम।",
    status_detected: "पहचाना गया",
    status_missing: "गायब",
    status_optional: "वैकल्पिक",
    mapping_not_detected: "पहचाना नहीं गया",
    mapping_no_data: "कोई डेटा नहीं।",
    unused_all_recognized: "सभी कॉलम पहचाने गए या जानबूझकर अनदेखा किए गए।",
    fatal_unable_analyze: "CSV का विश्लेषण नहीं हो सका।",
    no_errors: "कोई त्रुटि नहीं।",
    no_warnings: "कोई चेतावनी नहीं।",
    unknown_error_csv: "CSV पढ़ते समय अज्ञात त्रुटि।",
    csv_empty: "CSV फ़ाइल खाली है।",
    loaded_file_fallback: "लोड की गई फ़ाइल",
    error_missing_date_column: "तारीख वाला कॉलम नहीं मिला। `date`, `flight_date` या `pilotlog_date` जैसा कुछ जोड़ें।",
    error_missing_registration_column: "रजिस्ट्रेशन कॉलम नहीं मिला। `registration`, `tail` या `ac_reg` जैसा कुछ जोड़ें।",
    error_missing_pilot1_column: "पायलट 1 का कॉलम नहीं मिला। `pilot1_last_name`, `pilot1_name`, `captain` या `name` जैसा कुछ जोड़ें।",
    error_missing_manufacturer_column: "निर्माता कॉलम नहीं मिला। `manufact`, `manufacturer` या `aircraft_manufact` जैसा कुछ जोड़ें।",
    error_missing_model_column: "मॉडल कॉलम नहीं मिला। `model`, `aircraft_model` या `modele` जैसा कुछ जोड़ें।",
    error_missing_total_time_column: "कुल समय वाला कोई कॉलम नहीं मिला। `time_total_aircraft`, `time_total_simulator`, `time_total`, `flight_time` या `Blk Hrs` जोड़ें।",
    row_missing_registration: "पंक्ति {lineNumber}: रजिस्ट्रेशन नहीं है।",
    row_missing_manufacturer: "पंक्ति {lineNumber}: {registration} के लिए निर्माता नहीं है।",
    row_missing_model: "पंक्ति {lineNumber}: {registration} के लिए मॉडल नहीं है।",
    row_invalid_date: "पंक्ति {lineNumber}: तारीख खाली या अमान्य है।",
    row_invalid_total_time: "पंक्ति {lineNumber}: कुल समय गायब या अमान्य है।",
    row_invalid_times: "पंक्ति {lineNumber}: प्रस्थान या आगमन समय अमान्य है।",
    row_missing_departure_airport: "पंक्ति {lineNumber}: प्रस्थान हवाई अड्डा गायब है।",
    row_missing_arrival_airport: "पंक्ति {lineNumber}: आगमन हवाई अड्डा गायब है।",
    row_role_missing_last_name: "पंक्ति {lineNumber}: {role} बिना उपनाम के दिया गया है।",
    row_pilot1_required: "पंक्ति {lineNumber}: पायलट 1 आवश्यक है।",
    warning_conflicting_pilot_field: "पंक्ति {lineNumber}: {role} के {field} में विरोधाभास है; {lastName} के लिए पहला मान रखा जाएगा।",
    warning_conflicting_aircraft_field: "पंक्ति {lineNumber}: {registration} के {field} में विमान मान विरोधाभासी है; पहला मान रखा जाएगा।",
    status_blocked: "{fileName} के लिए रूपांतरण रुका हुआ है: निर्यात से पहले {errorCount} समस्या/समस्याएँ ठीक करनी होंगी।",
    status_ready_warnings: "{warningCount} चेतावनी के साथ रूपांतरण तैयार है। ऐप में आयात करने से पहले इन्हें देखें।",
    status_ready_success: "रूपांतरण तैयार है: {flightCount} उड़ानें, {pilotCount} पायलट, और {aircraftCount} विमान रिकॉर्ड।",
    role_pilot1: "पायलट 1",
    role_pilot2: "पायलट 2",
    role_pilot3: "पायलट 3",
    role_pilot4: "पायलट 4",
    pilot_field_firstName: "पहला नाम",
    pilot_field_company: "कंपनी",
    pilot_field_code: "कोड",
    pilot_field_phone: "फ़ोन",
    pilot_field_email: "ईमेल",
    aircraft_field_manufact: "निर्माता",
    aircraft_field_model: "मॉडल",
    aircraft_field_variant: "वैरिएंट",
    aircraft_field_typeRating: "टाइप रेटिंग",
    aircraft_field_company: "कंपनी",
    aircraft_field_notes: "नोट्स",
    aircraft_field_type: "प्रकार",
    aircraft_field_simulatorCategory: "सिम्युलेटर श्रेणी",
    aircraft_field_aircraftClass: "वर्ग",
    aircraft_field_engineType: "इंजन प्रकार",
    aircraft_type_aircraft: "विमान",
    aircraft_type_simulator: "सिम्युलेटर",
    aircraft_class_ap: "विमान (AP)",
    aircraft_class_rt: "रोटरक्राफ्ट (RT)",
    aircraft_class_dr: "ड्रोन (DR)",
    aircraft_class_gl: "ग्लाइडर (GL)",
    aircraft_class_ml: "माइक्रोलाइट (ML)",
    aircraft_class_pl: "पावर्ड लिफ्ट (PL)",
    aircraft_class_la: "हवा से हल्का (LA)",
    engine_type_piston: "पिस्टन",
    engine_type_turboprop: "टर्बोप्रॉप / शाफ्ट",
    engine_type_jet: "जेट",
    template_sample_remark: "उदाहरण उड़ान"
  },
  zh: {
    page_title: "AeroLog CSV 转换器",
    eyebrow: "AeroLog 导入工具",
    language_label: "语言",
    hero_title_html: "CSV 转为 <code>Flights.json</code>、<code>Pilots.json</code> 和 <code>Aircrafts.json</code>",
    hero_copy: "此页面可读取单个 CSV 文件，自动识别已知列，校验最少必填字段，并生成应用所需的三个 JSON 文件。",
    choose_csv: "选择 CSV",
    download_csv_template: "下载 CSV 模板",
    output_filenames_html: "输出文件名始终为 <code>Flights.json</code>、<code>Pilots.json</code> 和 <code>Aircrafts.json</code>。",
    default_settings_title: "默认设置",
    default_settings_copy: "当 CSV 未提供部分机型信息时使用。",
    default_type_label: "默认类型",
    default_class_label: "默认类别",
    default_engine_type_label: "默认发动机类型",
    default_aircraft_company_label: "默认飞机公司",
    default_pilot_company_label: "默认飞行员公司",
    optional_placeholder: "可选",
    tip_html: "提示：如果 CSV 不包含这些列，请保留 <code>Aircraft</code>、<code>AP</code> 以及与机队匹配的发动机类型。",
    minimum_required_fields_title: "最低必填字段",
    minimum_required_fields_copy: "转换器接受列别名，但至少仍需要：",
    constraint_flight_html: "<strong>飞行</strong>：日期、注册号、飞行员 1，以及飞机或模拟器总时长。",
    constraint_route_html: "<strong>航线</strong>：如果该行不是模拟器记录，则需要出发和到达机场。",
    constraint_aircraft_html: "<strong>飞机</strong>：注册号、制造商和型号。",
    constraint_pilot_html: "<strong>飞行员</strong>：每位填写的飞行员都必须有姓氏。",
    airport_codes_helper: "机场代码会原样保留在 JSON 中，但只有当这些代码已存在于应用的机场数据库中时，应用才会导入这些航班。",
    result_title: "结果",
    status_no_file: "尚未加载文件。",
    summary_rows: "CSV 行数",
    summary_flights: "航班",
    summary_pilots: "飞行员",
    summary_aircrafts: "飞机",
    summary_errors: "错误",
    summary_warnings: "警告",
    download_flights: "下载 Flights.json",
    download_pilots: "下载 Pilots.json",
    download_aircrafts: "下载 Aircrafts.json",
    mapping_title: "列映射",
    mapping_copy: "已加载 CSV 中自动识别出的列。",
    mapping_target_field: "目标字段",
    mapping_detected_column: "识别到的列",
    mapping_status: "状态",
    mapping_placeholder: "加载 CSV 后即可查看识别结果。",
    unused_columns_title: "未识别的列",
    unused_columns_copy: "可用于发现意外列名或拼写错误。",
    unused_columns_placeholder: "没有可显示的列。",
    blocking_errors_title: "阻塞错误",
    blocking_errors_copy: "这些问题会阻止 JSON 文件生成。",
    errors_placeholder: "暂无错误。",
    warnings_title: "警告",
    warnings_copy: "有用的信息，不会阻止生成。",
    warnings_placeholder: "暂无警告。",
    preview_title: "JSON 预览",
    preview_copy: "每个生成文件的第一项。",
    status_detected: "已识别",
    status_missing: "缺失",
    status_optional: "可选",
    mapping_not_detected: "未识别",
    mapping_no_data: "没有数据。",
    unused_all_recognized: "所有列都已识别或被有意忽略。",
    fatal_unable_analyze: "无法分析 CSV。",
    no_errors: "无错误。",
    no_warnings: "无警告。",
    unknown_error_csv: "读取 CSV 时发生未知错误。",
    csv_empty: "CSV 文件为空。",
    loaded_file_fallback: "已加载文件",
    error_missing_date_column: "未找到日期列。请添加如 `date`、`flight_date` 或 `pilotlog_date` 这样的列名。",
    error_missing_registration_column: "未找到注册号列。请添加如 `registration`、`tail` 或 `ac_reg` 这样的列名。",
    error_missing_pilot1_column: "未找到飞行员 1 列。请添加如 `pilot1_last_name`、`pilot1_name`、`captain` 或 `name` 这样的列名。",
    error_missing_manufacturer_column: "未找到制造商列。请添加如 `manufact`、`manufacturer` 或 `aircraft_manufact` 这样的列名。",
    error_missing_model_column: "未找到型号列。请添加如 `model`、`aircraft_model` 或 `modele` 这样的列名。",
    error_missing_total_time_column: "未检测到总时间列。请添加 `time_total_aircraft`、`time_total_simulator`、`time_total`、`flight_time` 或 `Blk Hrs`。",
    row_missing_registration: "第 {lineNumber} 行：缺少注册号。",
    row_missing_manufacturer: "第 {lineNumber} 行：{registration} 缺少制造商。",
    row_missing_model: "第 {lineNumber} 行：{registration} 缺少型号。",
    row_invalid_date: "第 {lineNumber} 行：日期为空或无效。",
    row_invalid_total_time: "第 {lineNumber} 行：总时间缺失或无效。",
    row_invalid_times: "第 {lineNumber} 行：起飞或到达时间无效。",
    row_missing_departure_airport: "第 {lineNumber} 行：缺少出发机场。",
    row_missing_arrival_airport: "第 {lineNumber} 行：缺少到达机场。",
    row_role_missing_last_name: "第 {lineNumber} 行：{role} 缺少姓氏。",
    row_pilot1_required: "第 {lineNumber} 行：必须填写飞行员 1。",
    warning_conflicting_pilot_field: "第 {lineNumber} 行：{role} 的 {field} 存在冲突；将保留 {lastName} 的第一个值。",
    warning_conflicting_aircraft_field: "第 {lineNumber} 行：{registration} 的 {field} 存在飞机信息冲突；将保留第一个值。",
    status_blocked: "{fileName} 的转换已被阻止：导出前需修复 {errorCount} 个问题。",
    status_ready_warnings: "转换已完成，但有 {warningCount} 条警告。导入应用前请先检查。",
    status_ready_success: "转换完成：{flightCount} 条航班、{pilotCount} 位飞行员、{aircraftCount} 条飞机记录。",
    role_pilot1: "飞行员 1",
    role_pilot2: "飞行员 2",
    role_pilot3: "飞行员 3",
    role_pilot4: "飞行员 4",
    pilot_field_firstName: "名字",
    pilot_field_company: "公司",
    pilot_field_code: "代码",
    pilot_field_phone: "电话",
    pilot_field_email: "电子邮件",
    aircraft_field_manufact: "制造商",
    aircraft_field_model: "型号",
    aircraft_field_variant: "变体",
    aircraft_field_typeRating: "机型等级",
    aircraft_field_company: "公司",
    aircraft_field_notes: "备注",
    aircraft_field_type: "类型",
    aircraft_field_simulatorCategory: "模拟器类别",
    aircraft_field_aircraftClass: "类别",
    aircraft_field_engineType: "发动机类型",
    aircraft_type_aircraft: "飞机",
    aircraft_type_simulator: "模拟器",
    aircraft_class_ap: "飞机 (AP)",
    aircraft_class_rt: "旋翼机 (RT)",
    aircraft_class_dr: "无人机 (DR)",
    aircraft_class_gl: "滑翔机 (GL)",
    aircraft_class_ml: "轻型飞机 (ML)",
    aircraft_class_pl: "动力升力机 (PL)",
    aircraft_class_la: "轻于空气 (LA)",
    engine_type_piston: "活塞",
    engine_type_turboprop: "涡桨 / 轴",
    engine_type_jet: "喷气",
    template_sample_remark: "示例飞行"
  },
  ja: {
    page_title: "AeroLog CSV コンバーター",
    eyebrow: "AeroLog インポートツール",
    language_label: "言語",
    hero_title_html: "CSV から <code>Flights.json</code>、<code>Pilots.json</code>、<code>Aircrafts.json</code> を生成",
    hero_copy: "このページは 1 つの CSV ファイルを読み込み、既知の列を自動検出し、最低限必要な項目を検証して、アプリが必要とする 3 つの JSON ファイルを生成します。",
    choose_csv: "CSV を選択",
    download_csv_template: "CSV テンプレートをダウンロード",
    output_filenames_html: "出力ファイル名は常に <code>Flights.json</code>、<code>Pilots.json</code>、<code>Aircrafts.json</code> です。",
    default_settings_title: "デフォルト設定",
    default_settings_copy: "CSV に一部の機体情報がない場合に使われます。",
    default_type_label: "デフォルト種別",
    default_class_label: "デフォルトクラス",
    default_engine_type_label: "デフォルトエンジン種別",
    default_aircraft_company_label: "デフォルト機体会社",
    default_pilot_company_label: "デフォルト操縦士会社",
    optional_placeholder: "任意",
    tip_html: "ヒント: CSV にこれらの列がない場合は、<code>Aircraft</code>、<code>AP</code>、および機材に合ったエンジン種別をそのまま使ってください。",
    minimum_required_fields_title: "最低限必要な項目",
    minimum_required_fields_copy: "このコンバーターは列エイリアスを受け付けますが、少なくとも次が必要です。",
    constraint_flight_html: "<strong>フライト</strong>: 日付、機体登録、パイロット 1、総飛行時間またはシミュレーター時間。",
    constraint_route_html: "<strong>経路</strong>: 行がシミュレーター記録でない場合は出発地と到着地。",
    constraint_aircraft_html: "<strong>機体</strong>: 機体登録、メーカー、モデル。",
    constraint_pilot_html: "<strong>操縦士</strong>: 入力された各操縦士に姓が必要です。",
    airport_codes_helper: "空港コードは JSON 内でそのまま保持されますが、アプリがフライトを取り込むのは、そのコードが空港データベースに既に存在する場合のみです。",
    result_title: "結果",
    status_no_file: "ファイルが読み込まれていません。",
    summary_rows: "CSV 行数",
    summary_flights: "フライト",
    summary_pilots: "操縦士",
    summary_aircrafts: "機体",
    summary_errors: "エラー",
    summary_warnings: "警告",
    download_flights: "Flights.json をダウンロード",
    download_pilots: "Pilots.json をダウンロード",
    download_aircrafts: "Aircrafts.json をダウンロード",
    mapping_title: "列マッピング",
    mapping_copy: "読み込まれた CSV で自動認識された列です。",
    mapping_target_field: "対象フィールド",
    mapping_detected_column: "検出された列",
    mapping_status: "状態",
    mapping_placeholder: "CSV を読み込むと検出結果が表示されます。",
    unused_columns_title: "未認識の列",
    unused_columns_copy: "予期しない列名やタイプミスの確認に便利です。",
    unused_columns_placeholder: "表示する列はありません。",
    blocking_errors_title: "ブロッキングエラー",
    blocking_errors_copy: "これらの問題があると JSON ファイルを生成できません。",
    errors_placeholder: "まだエラーはありません。",
    warnings_title: "警告",
    warnings_copy: "生成は止めないが確認すべき情報です。",
    warnings_placeholder: "まだ警告はありません。",
    preview_title: "JSON プレビュー",
    preview_copy: "生成された各ファイルの先頭 1 件です。",
    status_detected: "検出済み",
    status_missing: "不足",
    status_optional: "任意",
    mapping_not_detected: "未検出",
    mapping_no_data: "データなし。",
    unused_all_recognized: "すべての列が認識されたか、意図的に無視されました。",
    fatal_unable_analyze: "CSV を解析できませんでした。",
    no_errors: "エラーはありません。",
    no_warnings: "警告はありません。",
    unknown_error_csv: "CSV の読み込み中に不明なエラーが発生しました。",
    csv_empty: "CSV ファイルが空です。",
    loaded_file_fallback: "読み込まれたファイル",
    error_missing_date_column: "日付列が見つかりません。`date`、`flight_date`、`pilotlog_date` などを追加してください。",
    error_missing_registration_column: "登録記号列が見つかりません。`registration`、`tail`、`ac_reg` などを追加してください。",
    error_missing_pilot1_column: "パイロット 1 の列が見つかりません。`pilot1_last_name`、`pilot1_name`、`captain`、`name` などを追加してください。",
    error_missing_manufacturer_column: "メーカー列が見つかりません。`manufact`、`manufacturer`、`aircraft_manufact` などを追加してください。",
    error_missing_model_column: "モデル列が見つかりません。`model`、`aircraft_model`、`modele` などを追加してください。",
    error_missing_total_time_column: "総時間列が見つかりません。`time_total_aircraft`、`time_total_simulator`、`time_total`、`flight_time`、`Blk Hrs` を追加してください。",
    row_missing_registration: "{lineNumber} 行目: 登録記号がありません。",
    row_missing_manufacturer: "{lineNumber} 行目: {registration} のメーカーがありません。",
    row_missing_model: "{lineNumber} 行目: {registration} のモデルがありません。",
    row_invalid_date: "{lineNumber} 行目: 日付が空か無効です。",
    row_invalid_total_time: "{lineNumber} 行目: 総時間がないか無効です。",
    row_invalid_times: "{lineNumber} 行目: 出発時刻または到着時刻が無効です。",
    row_missing_departure_airport: "{lineNumber} 行目: 出発空港がありません。",
    row_missing_arrival_airport: "{lineNumber} 行目: 到着空港がありません。",
    row_role_missing_last_name: "{lineNumber} 行目: {role} に姓がありません。",
    row_pilot1_required: "{lineNumber} 行目: パイロット 1 は必須です。",
    warning_conflicting_pilot_field: "{lineNumber} 行目: {role} の {field} に矛盾があります。{lastName} については最初の値を保持します。",
    warning_conflicting_aircraft_field: "{lineNumber} 行目: {registration} の {field} に機体情報の矛盾があります。最初の値を保持します。",
    status_blocked: "{fileName} の変換は停止しました。書き出し前に {errorCount} 件の問題を修正してください。",
    status_ready_warnings: "{warningCount} 件の警告がありますが変換は完了しました。アプリに取り込む前に確認してください。",
    status_ready_success: "変換完了: フライト {flightCount} 件、操縦士 {pilotCount} 件、機体 {aircraftCount} 件。",
    role_pilot1: "パイロット 1",
    role_pilot2: "パイロット 2",
    role_pilot3: "パイロット 3",
    role_pilot4: "パイロット 4",
    pilot_field_firstName: "名",
    pilot_field_company: "会社",
    pilot_field_code: "コード",
    pilot_field_phone: "電話",
    pilot_field_email: "メール",
    aircraft_field_manufact: "メーカー",
    aircraft_field_model: "モデル",
    aircraft_field_variant: "バリアント",
    aircraft_field_typeRating: "型式限定",
    aircraft_field_company: "会社",
    aircraft_field_notes: "メモ",
    aircraft_field_type: "種別",
    aircraft_field_simulatorCategory: "シミュレータ区分",
    aircraft_field_aircraftClass: "クラス",
    aircraft_field_engineType: "エンジン種別",
    aircraft_type_aircraft: "機体",
    aircraft_type_simulator: "シミュレーター",
    aircraft_class_ap: "飛行機 (AP)",
    aircraft_class_rt: "回転翼機 (RT)",
    aircraft_class_dr: "ドローン (DR)",
    aircraft_class_gl: "グライダー (GL)",
    aircraft_class_ml: "マイクロライト (ML)",
    aircraft_class_pl: "パワードリフト (PL)",
    aircraft_class_la: "軽航空機 (LA)",
    engine_type_piston: "ピストン",
    engine_type_turboprop: "ターボプロップ / シャフト",
    engine_type_jet: "ジェット",
    template_sample_remark: "サンプルフライト"
  },
  ko: {
    page_title: "AeroLog CSV 변환기",
    eyebrow: "AeroLog 가져오기 도구",
    language_label: "언어",
    hero_title_html: "CSV를 <code>Flights.json</code>, <code>Pilots.json</code>, <code>Aircrafts.json</code>로 변환",
    hero_copy: "이 페이지는 하나의 CSV 파일을 읽고, 알려진 열을 자동으로 인식하며, 최소 필수 항목을 검증한 뒤 앱에서 기대하는 세 개의 JSON 파일을 생성합니다.",
    choose_csv: "CSV 선택",
    download_csv_template: "CSV 템플릿 다운로드",
    output_filenames_html: "출력 파일 이름은 항상 <code>Flights.json</code>, <code>Pilots.json</code>, <code>Aircrafts.json</code>입니다.",
    default_settings_title: "기본 설정",
    default_settings_copy: "CSV에 일부 항공기 정보가 없을 때 사용됩니다.",
    default_type_label: "기본 유형",
    default_class_label: "기본 등급",
    default_engine_type_label: "기본 엔진 유형",
    default_aircraft_company_label: "기본 항공기 회사",
    default_pilot_company_label: "기본 조종사 회사",
    optional_placeholder: "선택 사항",
    tip_html: "팁: CSV에 해당 열이 없다면 <code>Aircraft</code>, <code>AP</code>, 그리고 보유 기종에 맞는 엔진 유형을 유지하세요.",
    minimum_required_fields_title: "최소 필수 항목",
    minimum_required_fields_copy: "변환기는 열 별칭을 허용하지만, 최소한 다음 항목은 필요합니다.",
    constraint_flight_html: "<strong>비행</strong>: 날짜, 등록기호, 조종사 1, 그리고 항공기 또는 시뮬레이터 총 시간.",
    constraint_route_html: "<strong>경로</strong>: 해당 행이 시뮬레이터 세션이 아니라면 출발지와 도착지가 필요합니다.",
    constraint_aircraft_html: "<strong>항공기</strong>: 등록기호, 제조사, 모델.",
    constraint_pilot_html: "<strong>조종사</strong>: 입력된 각 조종사에 대해 성이 필요합니다.",
    airport_codes_helper: "공항 코드는 JSON에 그대로 유지되지만, 앱은 해당 코드가 공항 데이터베이스에 이미 존재하는 경우에만 비행을 가져옵니다.",
    result_title: "결과",
    status_no_file: "불러온 파일이 없습니다.",
    summary_rows: "CSV 행",
    summary_flights: "비행",
    summary_pilots: "조종사",
    summary_aircrafts: "항공기",
    summary_errors: "오류",
    summary_warnings: "경고",
    download_flights: "Flights.json 다운로드",
    download_pilots: "Pilots.json 다운로드",
    download_aircrafts: "Aircrafts.json 다운로드",
    mapping_title: "열 매핑",
    mapping_copy: "불러온 CSV에서 자동으로 인식된 열입니다.",
    mapping_target_field: "대상 필드",
    mapping_detected_column: "인식된 열",
    mapping_status: "상태",
    mapping_placeholder: "CSV를 불러오면 인식된 매핑이 표시됩니다.",
    unused_columns_title: "인식되지 않은 열",
    unused_columns_copy: "예상치 못한 열 이름이나 오타를 찾는 데 유용합니다.",
    unused_columns_placeholder: "표시할 열이 없습니다.",
    blocking_errors_title: "차단 오류",
    blocking_errors_copy: "이 문제들이 있으면 JSON 파일을 생성할 수 없습니다.",
    errors_placeholder: "아직 오류가 없습니다.",
    warnings_title: "경고",
    warnings_copy: "생성을 막지는 않지만 확인이 필요한 정보입니다.",
    warnings_placeholder: "아직 경고가 없습니다.",
    preview_title: "JSON 미리보기",
    preview_copy: "생성된 각 파일의 첫 번째 항목입니다.",
    status_detected: "인식됨",
    status_missing: "누락",
    status_optional: "선택 사항",
    mapping_not_detected: "인식되지 않음",
    mapping_no_data: "데이터 없음.",
    unused_all_recognized: "모든 열이 인식되었거나 의도적으로 무시되었습니다.",
    fatal_unable_analyze: "CSV를 분석할 수 없습니다.",
    no_errors: "오류 없음.",
    no_warnings: "경고 없음.",
    unknown_error_csv: "CSV를 읽는 중 알 수 없는 오류가 발생했습니다.",
    csv_empty: "CSV 파일이 비어 있습니다.",
    loaded_file_fallback: "불러온 파일",
    error_missing_date_column: "날짜 열을 찾을 수 없습니다. `date`, `flight_date`, `pilotlog_date` 같은 이름을 추가하세요.",
    error_missing_registration_column: "등록기호 열을 찾을 수 없습니다. `registration`, `tail`, `ac_reg` 같은 이름을 추가하세요.",
    error_missing_pilot1_column: "조종사 1 열을 찾을 수 없습니다. `pilot1_last_name`, `pilot1_name`, `captain`, `name` 같은 이름을 추가하세요.",
    error_missing_manufacturer_column: "제조사 열을 찾을 수 없습니다. `manufact`, `manufacturer`, `aircraft_manufact` 같은 이름을 추가하세요.",
    error_missing_model_column: "모델 열을 찾을 수 없습니다. `model`, `aircraft_model`, `modele` 같은 이름을 추가하세요.",
    error_missing_total_time_column: "총 시간 열을 찾지 못했습니다. `time_total_aircraft`, `time_total_simulator`, `time_total`, `flight_time`, `Blk Hrs`를 추가하세요.",
    row_missing_registration: "{lineNumber}행: 등록기호가 없습니다.",
    row_missing_manufacturer: "{lineNumber}행: {registration}의 제조사가 없습니다.",
    row_missing_model: "{lineNumber}행: {registration}의 모델이 없습니다.",
    row_invalid_date: "{lineNumber}행: 날짜가 비어 있거나 올바르지 않습니다.",
    row_invalid_total_time: "{lineNumber}행: 총 시간이 없거나 올바르지 않습니다.",
    row_invalid_times: "{lineNumber}행: 출발 또는 도착 시간이 올바르지 않습니다.",
    row_missing_departure_airport: "{lineNumber}행: 출발 공항이 없습니다.",
    row_missing_arrival_airport: "{lineNumber}행: 도착 공항이 없습니다.",
    row_role_missing_last_name: "{lineNumber}행: {role}에 성이 없습니다.",
    row_pilot1_required: "{lineNumber}행: 조종사 1은 필수입니다.",
    warning_conflicting_pilot_field: "{lineNumber}행: {role}의 {field} 값이 충돌합니다. {lastName}에 대해서는 첫 번째 값을 유지합니다.",
    warning_conflicting_aircraft_field: "{lineNumber}행: {registration}의 {field} 값이 충돌합니다. 첫 번째 값을 유지합니다.",
    status_blocked: "{fileName} 변환이 차단되었습니다. 내보내기 전에 {errorCount}개 문제를 수정해야 합니다.",
    status_ready_warnings: "{warningCount}개의 경고와 함께 변환이 완료되었습니다. 앱으로 가져오기 전에 확인하세요.",
    status_ready_success: "변환 완료: 비행 {flightCount}건, 조종사 {pilotCount}명, 항공기 {aircraftCount}건.",
    role_pilot1: "조종사 1",
    role_pilot2: "조종사 2",
    role_pilot3: "조종사 3",
    role_pilot4: "조종사 4",
    pilot_field_firstName: "이름",
    pilot_field_company: "회사",
    pilot_field_code: "코드",
    pilot_field_phone: "전화",
    pilot_field_email: "이메일",
    aircraft_field_manufact: "제조사",
    aircraft_field_model: "모델",
    aircraft_field_variant: "변형",
    aircraft_field_typeRating: "형식 한정",
    aircraft_field_company: "회사",
    aircraft_field_notes: "메모",
    aircraft_field_type: "유형",
    aircraft_field_simulatorCategory: "시뮬레이터 분류",
    aircraft_field_aircraftClass: "등급",
    aircraft_field_engineType: "엔진 유형",
    aircraft_type_aircraft: "항공기",
    aircraft_type_simulator: "시뮬레이터",
    aircraft_class_ap: "비행기 (AP)",
    aircraft_class_rt: "회전익기 (RT)",
    aircraft_class_dr: "드론 (DR)",
    aircraft_class_gl: "글라이더 (GL)",
    aircraft_class_ml: "마이크로라이트 (ML)",
    aircraft_class_pl: "파워드 리프트 (PL)",
    aircraft_class_la: "경항공 (LA)",
    engine_type_piston: "피스톤",
    engine_type_turboprop: "터보프롭 / 샤프트",
    engine_type_jet: "제트",
    template_sample_remark: "예시 비행"
  }
};

const FIELD_DEFINITIONS = [
  { key: "date", label: "Date", required: true, aliases: ["date", "flight_date", "pilotlog_date", "jour", "flight day"] },
  { key: "time_departure", label: "Departure time", required: false, aliases: ["time_dep", "time_departure", "departure_time", "off_block", "block_off", "heure_depart", "dep_time"] },
  { key: "time_arrival", label: "Arrival time", required: false, aliases: ["time_arr", "time_arrival", "arrival_time", "on_block", "block_on", "heure_arrivee", "arr_time"] },
  { key: "time_takeoff", label: "Takeoff time", required: false, aliases: ["time_takeoff", "takeoff_time", "off_time", "heure_decollage"] },
  { key: "time_landing", label: "Landing time", required: false, aliases: ["time_landing", "landing_time", "on_time", "heure_atterrissage"] },
  { key: "time_hobbs_departure", label: "Hobbs departure", required: false, aliases: ["time_hobbs_departure", "hobbs_departure", "hobbs_out"] },
  { key: "time_hobbs_arrival", label: "Hobbs arrival", required: false, aliases: ["time_hobbs_arrival", "hobbs_arrival", "hobbs_in"] },
  { key: "registration", label: "Registration", required: true, aliases: ["registration", "tail", "tail_number", "aircraft_registration", "ac_reg", "immat", "immatriculation"] },
  { key: "flight_number", label: "Flight number", required: false, aliases: ["flightnumber", "flight_number", "flight no", "flight_no", "numero_vol"] },
  { key: "departure_airport", label: "Departure airport", required: false, aliases: ["af_dep", "from", "departure", "departure_airport", "dep_airport", "origin", "icao_depart"] },
  { key: "arrival_airport", label: "Arrival airport", required: false, aliases: ["af_arr", "to", "arrival", "arrival_airport", "arr_airport", "destination", "icao_arrivee"] },
  { key: "departure_runway", label: "Departure runway", required: false, aliases: ["departure_runway", "dep_runway", "runway_dep", "piste_depart"] },
  { key: "arrival_runway", label: "Arrival runway", required: false, aliases: ["arrival_runway", "arr_runway", "runway_arr", "piste_arrivee"] },
  { key: "is_simulator", label: "Simulator flight", required: false, aliases: ["is_simulator", "simulator", "sim", "is_sim", "flight_type_simulator"] },
  { key: "time_total_aircraft", label: "Total aircraft time", required: false, aliases: ["time_total_aircraft", "aircraft_time", "flight_time", "time_total", "time_total_vol", "blk hrs", "block_hours", "block time", "total_time"] },
  { key: "time_total_simulator", label: "Total simulator time", required: false, aliases: ["time_total_simulator", "simulator_time", "sim_time", "fstd_time", "sim_total_time"] },
  { key: "time_air", label: "Air time", required: false, aliases: ["time_air", "air_time", "flight_air_time"] },
  { key: "time_pic", label: "PIC time", required: false, aliases: ["time_pic", "pic", "pic_time"] },
  { key: "time_sic", label: "SIC time", required: false, aliases: ["time_sic", "sic", "sic_time"] },
  { key: "time_dual", label: "Dual time", required: false, aliases: ["time_dual", "dual", "dual_time"] },
  { key: "time_picus", label: "PICUS time", required: false, aliases: ["time_picus", "picus", "picus_time"] },
  { key: "time_instructor", label: "Instructor time", required: false, aliases: ["time_instructor", "instructor_time"] },
  { key: "time_examiner", label: "Examiner time", required: false, aliases: ["time_examiner", "examiner_time"] },
  { key: "time_night", label: "Night time", required: false, aliases: ["time_night", "night hrs", "night_hours", "night_time"] },
  { key: "time_ifr", label: "IFR time", required: false, aliases: ["time_ifr", "ifr hrs", "ifr_hours", "ifr_time"] },
  { key: "time_xc", label: "Cross-country time", required: false, aliases: ["time_xc", "xc_time", "cross_country", "cross_country_time"] },
  { key: "time_relief", label: "Relief time", required: false, aliases: ["time_relief", "relief_time"] },
  { key: "time_actual", label: "Actual instrument time", required: false, aliases: ["time_actual", "actual_time", "actual_instrument_time"] },
  { key: "holding_count", label: "Holdings", required: false, aliases: ["holding_count", "holdings", "holding"] },
  { key: "ifr_approach_count", label: "IFR approaches", required: false, aliases: ["ifr_approach_count", "ifr_appr", "ifr appr", "ifr_approaches", "approaches_ifr"] },
  { key: "landings_day", label: "Day landings", required: false, aliases: ["ldg_day", "landings_day", "day ldg", "day_landings"] },
  { key: "landings_night", label: "Night landings", required: false, aliases: ["ldg_night", "landings_night", "night ldg", "night_landings"] },
  { key: "takeoffs_day", label: "Day takeoffs", required: false, aliases: ["to_day", "takeoffs_day", "day t/o", "day_takeoffs"] },
  { key: "takeoffs_night", label: "Night takeoffs", required: false, aliases: ["to_night", "takeoffs_night", "night t/o", "night_takeoffs"] },
  { key: "pilot_flying", label: "Pilot flying", required: false, aliases: ["pf", "pilot_flying", "pilot flying"] },
  { key: "remarks", label: "Remarks", required: false, aliases: ["remarks", "comment", "notes", "observation"] },
  { key: "pilot1_first_name", label: "Pilot 1 first name", required: false, aliases: ["pilot1_first_name", "pilot1_firstname", "captain_first_name", "pic_first_name", "first_name"] },
  { key: "pilot1_last_name", label: "Pilot 1 last name", required: true, aliases: ["pilot1_last_name", "pilot1_name", "pilot1", "captain_last_name", "captain", "pic_name", "pic_last_name", "lastname", "last_name", "name"] },
  { key: "pilot1_company", label: "Pilot 1 company", required: false, aliases: ["pilot1_company", "captain_company", "pic_company"] },
  { key: "pilot1_code", label: "Pilot 1 code", required: false, aliases: ["pilot1_code", "captain_code", "pic_code"] },
  { key: "pilot1_phone", label: "Pilot 1 phone", required: false, aliases: ["pilot1_phone", "captain_phone"] },
  { key: "pilot1_email", label: "Pilot 1 email", required: false, aliases: ["pilot1_email", "captain_email"] },
  { key: "pilot2_first_name", label: "Pilot 2 first name", required: false, aliases: ["pilot2_first_name", "pilot2_firstname", "fo_first_name", "sic_first_name"] },
  { key: "pilot2_last_name", label: "Pilot 2 last name", required: false, aliases: ["pilot2_last_name", "pilot2_name", "pilot2", "fo_last_name", "sic_name", "sic_last_name", "paired with", "paired_with"] },
  { key: "pilot2_company", label: "Pilot 2 company", required: false, aliases: ["pilot2_company", "fo_company", "sic_company"] },
  { key: "pilot2_code", label: "Pilot 2 code", required: false, aliases: ["pilot2_code", "fo_code", "sic_code"] },
  { key: "pilot2_phone", label: "Pilot 2 phone", required: false, aliases: ["pilot2_phone", "fo_phone"] },
  { key: "pilot2_email", label: "Pilot 2 email", required: false, aliases: ["pilot2_email", "fo_email"] },
  { key: "pilot3_first_name", label: "Pilot 3 first name", required: false, aliases: ["pilot3_first_name", "pilot3_firstname"] },
  { key: "pilot3_last_name", label: "Pilot 3 last name", required: false, aliases: ["pilot3_last_name", "pilot3_name", "pilot3"] },
  { key: "pilot4_first_name", label: "Pilot 4 first name", required: false, aliases: ["pilot4_first_name", "pilot4_firstname"] },
  { key: "pilot4_last_name", label: "Pilot 4 last name", required: false, aliases: ["pilot4_last_name", "pilot4_name", "pilot4"] },
  { key: "aircraft_manufact", label: "Aircraft manufacturer", required: true, aliases: ["aircraft_manufact", "manufact", "manufacturer", "aircraft_manufacturer", "constructeur"] },
  { key: "aircraft_model", label: "Aircraft model", required: true, aliases: ["aircraft_model", "model", "aircraft_type_model", "modele", "typename", "type_name"] },
  { key: "aircraft_variant", label: "Aircraft variant", required: false, aliases: ["aircraft_variant", "variant", "version"] },
  { key: "aircraft_type_rating", label: "Type rating", required: false, aliases: ["aircraft_type_rating", "type_rating", "typerating"] },
  { key: "aircraft_company", label: "Aircraft company", required: false, aliases: ["aircraft_company", "operator", "company"] },
  { key: "aircraft_notes", label: "Aircraft notes", required: false, aliases: ["aircraft_notes", "aircraft_note", "aircraft_comments"] },
  { key: "aircraft_type", label: "Aircraft type", required: false, aliases: ["aircraft_type", "type"] },
  { key: "aircraft_class", label: "Aircraft class", required: false, aliases: ["aircraft_class", "class"] },
  { key: "aircraft_engine_type", label: "Engine type", required: false, aliases: ["aircraft_engine_type", "engine_type"] },
  { key: "aircraft_simulator_category", label: "Simulator category", required: false, aliases: ["aircraft_simulator_category", "simulator_category"] },
  { key: "aircraft_sub_class_sea", label: "Subclass sea", required: false, aliases: ["aircraft_sub_class_sea", "sub_class_sea", "sea"] },
  { key: "aircraft_multi_pilot", label: "Multi pilot", required: false, aliases: ["aircraft_multi_pilot", "multi_pilot"] },
  { key: "aircraft_multi_engine", label: "Multi engine", required: false, aliases: ["aircraft_multi_engine", "multi_engine"] },
  { key: "aircraft_is_complex", label: "Complex", required: false, aliases: ["aircraft_is_complex", "is_complex", "complex"] },
  { key: "aircraft_is_high_performance", label: "High performance", required: false, aliases: ["aircraft_is_high_performance", "is_high_performance", "high_performance"] },
  { key: "aircraft_is_heavy", label: "Heavy", required: false, aliases: ["aircraft_is_heavy", "is_heavy", "heavy"] },
  { key: "aircraft_is_efis", label: "EFIS", required: false, aliases: ["aircraft_is_efis", "is_efis", "efis"] },
  { key: "aircraft_has_tailwheel", label: "Tailwheel", required: false, aliases: ["aircraft_has_tailwheel", "has_tailwheel", "tailwheel"] },
  { key: "aircraft_is_glider", label: "Glider", required: false, aliases: ["aircraft_is_glider", "is_glider", "glider"] },
  { key: "aircraft_is_ultralight", label: "Ultralight", required: false, aliases: ["aircraft_is_ultralight", "is_ultralight", "ultralight"] },
  { key: "aircraft_is_tmg", label: "TMG", required: false, aliases: ["aircraft_is_tmg", "is_tmg", "tmg"] },
  { key: "aircraft_is_aerobatic", label: "Aerobatic", required: false, aliases: ["aircraft_is_aerobatic", "is_aerobatic", "aerobatic"] }
];

const ROLE_KEYS = ["pilot1", "pilot2", "pilot3", "pilot4"];
const PILOT_FIELD_LABEL_KEYS = {
  firstName: "pilot_field_firstName",
  company: "pilot_field_company",
  code: "pilot_field_code",
  phone: "pilot_field_phone",
  email: "pilot_field_email"
};
const AIRCRAFT_FIELD_LABEL_KEYS = {
  manufact: "aircraft_field_manufact",
  model: "aircraft_field_model",
  variant: "aircraft_field_variant",
  typeRating: "aircraft_field_typeRating",
  company: "aircraft_field_company",
  notes: "aircraft_field_notes",
  type: "aircraft_field_type",
  simulatorCategory: "aircraft_field_simulatorCategory",
  aircraftClass: "aircraft_field_aircraftClass",
  engineType: "aircraft_field_engineType"
};
const TEMPLATE_HEADERS = [
  "date",
  "time_departure",
  "time_arrival",
  "registration",
  "aircraft_manufact",
  "aircraft_model",
  "departure_airport",
  "arrival_airport",
  "time_total_aircraft",
  "pilot1_first_name",
  "pilot1_last_name",
  "pilot2_first_name",
  "pilot2_last_name",
  "flight_number",
  "remarks"
];
const TEMPLATE_REQUIRED_HEADERS = new Set([
  "date",
  "registration",
  "aircraft_manufact",
  "aircraft_model",
  "departure_airport",
  "arrival_airport",
  "time_total_aircraft",
  "pilot1_last_name"
]);

const appState = {
  fileName: "",
  csvText: "",
  originalHeaders: [],
  headerEdits: {},
  addedHeaders: [],
  rowOverrides: {},
  rowDrafts: {},
  deletedLines: {},
  expandedProblemLine: null,
  downloads: null,
  lastResult: null,
  language: "en"
};

let headerEditorRerunTimer = null;

const dom = {
  input: document.getElementById("csv-file-input"),
  templateButton: document.getElementById("template-button"),
  templateXlsxButton: document.getElementById("template-xlsx-button"),
  languageSelect: document.getElementById("language-select"),
  statusBanner: document.getElementById("status-banner"),
  summaryRows: document.getElementById("summary-rows"),
  summaryFlights: document.getElementById("summary-flights"),
  summaryPilots: document.getElementById("summary-pilots"),
  summaryAircrafts: document.getElementById("summary-aircrafts"),
  summaryErrors: document.getElementById("summary-errors"),
  summaryWarnings: document.getElementById("summary-warnings"),
  downloadActions: document.getElementById("download-actions"),
  downloadFlights: document.getElementById("download-flights"),
  downloadPilots: document.getElementById("download-pilots"),
  downloadAircrafts: document.getElementById("download-aircrafts"),
  addHeaderButton: document.getElementById("add-header-button"),
  resetHeaderOverrides: document.getElementById("reset-header-overrides"),
  expectedFieldsPalette: document.getElementById("expected-fields-palette"),
  headerOverridesBody: document.getElementById("header-overrides-body"),
  editorValidatedCount: document.getElementById("editor-validated-count"),
  editorUnrecognizedCount: document.getElementById("editor-unrecognized-count"),
  editorMissingCount: document.getElementById("editor-missing-count"),
  editorErrorsCount: document.getElementById("editor-errors-count"),
  editorWarningsCount: document.getElementById("editor-warnings-count"),
  missingRequiredList: document.getElementById("missing-required-list"),
  unusedColumns: document.getElementById("unused-columns"),
  errorList: document.getElementById("error-list"),
  warningList: document.getElementById("warning-list"),
  problemRowPanel: document.getElementById("problem-row-panel"),
  problemRowPanelBackdrop: document.getElementById("problem-row-panel-backdrop"),
  appVersion: document.getElementById("app-version"),
  previewFlights: document.getElementById("preview-flights"),
  previewPilots: document.getElementById("preview-pilots"),
  previewAircrafts: document.getElementById("preview-aircrafts"),
  defaultAircraftType: document.getElementById("default-aircraft-type"),
  defaultAircraftClass: document.getElementById("default-aircraft-class"),
  defaultEngineType: document.getElementById("default-engine-type"),
  defaultAircraftCompany: document.getElementById("default-aircraft-company"),
  defaultPilotCompany: document.getElementById("default-pilot-company")
};

initialize();

function initialize() {
  populateLanguageSelect();
  setLanguage(resolveInitialLanguage(), { rerender: false });

  dom.input.addEventListener("change", handleFileSelection);
  dom.templateButton.addEventListener("click", downloadCsvTemplate);
  dom.templateXlsxButton?.addEventListener("click", downloadXlsxTemplate);
  dom.languageSelect.addEventListener("change", (event) => {
    setLanguage(event.target.value);
  });
  dom.addHeaderButton?.addEventListener("click", addManualHeader);
  dom.resetHeaderOverrides?.addEventListener("click", resetHeaderEditor);
  dom.headerOverridesBody?.addEventListener("input", handleHeaderEditorChange);
  dom.headerOverridesBody?.addEventListener("change", handleHeaderEditorChange);
  dom.headerOverridesBody?.addEventListener("click", handleHeaderEditorAction);
  dom.headerOverridesBody?.addEventListener("dragover", handleHeaderDropTarget);
  dom.headerOverridesBody?.addEventListener("drop", handleHeaderDropTarget);
  dom.headerOverridesBody?.addEventListener("dragleave", handleHeaderDropLeave);
  dom.expectedFieldsPalette?.addEventListener("dragstart", handleExpectedFieldDragStart);
  dom.expectedFieldsPalette?.addEventListener("dragend", clearActiveDropzones);
  dom.errorList?.addEventListener("click", handleBlockingErrorListClick);
  dom.errorList?.addEventListener("keydown", handleBlockingErrorListKeydown);
  dom.problemRowPanel?.addEventListener("click", handleBlockingErrorAction);
  dom.problemRowPanel?.addEventListener("input", handleProblematicRowInput);
  dom.problemRowPanel?.addEventListener("change", handleProblematicRowInput);
  dom.problemRowPanelBackdrop?.addEventListener("click", closeProblemRowPanel);
  dom.downloadFlights.addEventListener("click", () => downloadJson("Flights.json"));
  dom.downloadPilots.addEventListener("click", () => downloadJson("Pilots.json"));
  dom.downloadAircrafts.addEventListener("click", () => downloadJson("Aircrafts.json"));

  [
    dom.defaultAircraftType,
    dom.defaultAircraftClass,
    dom.defaultEngineType,
    dom.defaultAircraftCompany,
    dom.defaultPilotCompany
  ].forEach((element) => {
    element.addEventListener("change", rerunConversionIfPossible);
    element.addEventListener("input", rerunConversionIfPossible);
  });

  renderInitialState();

  const url = new URL(window.location.href);
  if (url.searchParams.get("demo") === "1") {
    resetHeaderEditorState();
    appState.fileName = "demo.csv";
    runConversion(buildTemplateCsv());
  }
}

async function handleFileSelection(event) {
  const file = event.target.files?.[0];
  if (!file) {
    return;
  }

  appState.fileName = file.name;
  resetHeaderEditorState();

  try {
    const text = await readImportFile(file);
    runConversion(text);
  } catch (error) {
    const message = error instanceof Error ? error.message : t("unknown_error_csv");
    renderFatal(message);
  } finally {
    event.target.value = "";
  }
}

async function readImportFile(file) {
  if (isXlsxFile(file)) {
    const arrayBuffer = await file.arrayBuffer();
    return convertXlsxArrayBufferToCsv(arrayBuffer);
  }

  return file.text();
}

function isXlsxFile(file) {
  const name = String(file?.name || "").toLowerCase();
  return name.endsWith(".xlsx");
}

async function convertXlsxArrayBufferToCsv(arrayBuffer) {
  if (!window.JSZip) {
    throw new Error(t("xlsx_parse_error"));
  }

  try {
    const zip = await window.JSZip.loadAsync(arrayBuffer);
    const workbookXml = await readZipText(zip, "xl/workbook.xml");
    const workbookRelsXml = await readZipText(zip, "xl/_rels/workbook.xml.rels");
    const sharedStrings = await readSharedStrings(zip);
    const styleKinds = await readStyleKinds(zip);
    const worksheetPath = resolveFirstWorksheetPath(workbookXml, workbookRelsXml);

    if (!worksheetPath) {
      throw new Error(t("xlsx_missing_sheet"));
    }

    const worksheetXml = await readZipText(zip, worksheetPath);
    const rows = parseWorksheetRows(worksheetXml, sharedStrings, styleKinds);
    const normalizedRows = trimEmptyWorksheetRows(rows);

    if (!normalizedRows.length || !normalizedRows[0].some((value) => textOrNull(value))) {
      throw new Error(t("csv_empty"));
    }

    return matrixToCsv(normalizedRows);
  } catch (error) {
    if (error instanceof Error && [t("xlsx_missing_sheet"), t("csv_empty")].includes(error.message)) {
      throw error;
    }
    throw new Error(t("xlsx_parse_error"));
  }
}

async function readZipText(zip, path) {
  const entry = zip.file(path);
  if (!entry) {
    throw new Error(t("xlsx_parse_error"));
  }
  return entry.async("text");
}

async function readSharedStrings(zip) {
  const entry = zip.file("xl/sharedStrings.xml");
  if (!entry) {
    return [];
  }

  const xml = parseXml(await entry.async("text"));
  return Array.from(xml.querySelectorAll("si")).map((item) => (
    Array.from(item.querySelectorAll("t"))
      .map((node) => node.textContent || "")
      .join("")
  ));
}

async function readStyleKinds(zip) {
  const entry = zip.file("xl/styles.xml");
  if (!entry) {
    return [];
  }

  const xml = parseXml(await entry.async("text"));
  const customFormats = new Map(
    Array.from(xml.querySelectorAll("numFmts numFmt")).map((node) => [
      Number.parseInt(node.getAttribute("numFmtId") || "", 10),
      node.getAttribute("formatCode") || ""
    ])
  );

  return Array.from(xml.querySelectorAll("cellXfs xf")).map((xf) => {
    const numFmtId = Number.parseInt(xf.getAttribute("numFmtId") || "", 10);
    return resolveExcelNumberFormatKind(numFmtId, customFormats.get(numFmtId) || "");
  });
}

function resolveFirstWorksheetPath(workbookXmlText, workbookRelsXmlText) {
  const workbookXml = parseXml(workbookXmlText);
  const relsXml = parseXml(workbookRelsXmlText);
  const firstSheet = workbookXml.querySelector("sheets > sheet");
  if (!firstSheet) {
    return null;
  }

  const relationshipId = firstSheet.getAttribute("r:id") || firstSheet.getAttributeNS("*", "id");
  if (!relationshipId) {
    return null;
  }

  const relationship = Array.from(relsXml.querySelectorAll("Relationship")).find((node) => (
    node.getAttribute("Id") === relationshipId
  ));

  const target = relationship?.getAttribute("Target");
  if (!target) {
    return null;
  }

  if (target.startsWith("/")) {
    return target.replace(/^\/+/, "");
  }

  return target.startsWith("xl/") ? target : `xl/${target.replace(/^\/+/, "")}`;
}

function parseWorksheetRows(worksheetXmlText, sharedStrings, styleKinds) {
  const worksheetXml = parseXml(worksheetXmlText);
  const rows = [];

  Array.from(worksheetXml.querySelectorAll("sheetData > row")).forEach((rowNode) => {
    const rowIndex = Math.max(0, Number.parseInt(rowNode.getAttribute("r") || "1", 10) - 1);
    const rowValues = rows[rowIndex] || [];

    Array.from(rowNode.querySelectorAll("c")).forEach((cellNode) => {
      const reference = cellNode.getAttribute("r") || "";
      const columnIndex = getColumnIndexFromReference(reference);
      const styleIndex = Number.parseInt(cellNode.getAttribute("s") || "", 10);
      rowValues[columnIndex] = parseWorksheetCellValue(cellNode, sharedStrings, styleKinds[styleIndex] || "plain");
    });

    rows[rowIndex] = rowValues;
  });

  return rows.map((row) => {
    const safeRow = Array.isArray(row) ? row : [];
    const width = safeRow.length;
    return Array.from({ length: width }, (_, index) => safeRow[index] ?? "");
  });
}

function parseWorksheetCellValue(cellNode, sharedStrings, styleKind) {
  const type = cellNode.getAttribute("t") || "";
  if (type === "inlineStr") {
    return Array.from(cellNode.querySelectorAll("is t"))
      .map((node) => node.textContent || "")
      .join("");
  }

  const valueNode = cellNode.querySelector("v");
  const rawValue = valueNode?.textContent || "";

  if (type === "s") {
    const sharedIndex = Number.parseInt(rawValue, 10);
    return sharedStrings[sharedIndex] || "";
  }

  if (type === "b") {
    return rawValue === "1" ? "TRUE" : "FALSE";
  }

  if (type === "str") {
    return rawValue;
  }

  if (!rawValue) {
    return "";
  }

  if (styleKind === "date" || styleKind === "datetime" || styleKind === "time") {
    return formatExcelSerialValue(rawValue, styleKind);
  }

  return rawValue;
}

function parseXml(xmlText) {
  return new DOMParser().parseFromString(xmlText, "application/xml");
}

function getColumnIndexFromReference(reference) {
  const match = String(reference || "").match(/[A-Z]+/i);
  if (!match) {
    return 0;
  }

  return match[0]
    .toUpperCase()
    .split("")
    .reduce((total, char) => total * 26 + (char.charCodeAt(0) - 64), 0) - 1;
}

function resolveExcelNumberFormatKind(numFmtId, formatCode) {
  const builtInDateFormats = new Set([14, 15, 16, 17]);
  const builtInTimeFormats = new Set([18, 19, 20, 21, 45, 46, 47]);
  const builtInDateTimeFormats = new Set([22]);

  if (builtInDateTimeFormats.has(numFmtId)) {
    return "datetime";
  }
  if (builtInDateFormats.has(numFmtId)) {
    return "date";
  }
  if (builtInTimeFormats.has(numFmtId)) {
    return "time";
  }

  const cleaned = String(formatCode || "")
    .toLowerCase()
    .replace(/"[^"]*"/g, "")
    .replace(/\[[^\]]*]/g, "")
    .replace(/\\./g, "")
    .replace(/_.?/g, "")
    .replace(/\*/g, "");

  const hasDate = /[yd]/.test(cleaned);
  const hasTime = /h|s|am\/pm/.test(cleaned);

  if (hasDate && hasTime) {
    return "datetime";
  }
  if (hasDate) {
    return "date";
  }
  if (hasTime) {
    return "time";
  }

  return "plain";
}

function formatExcelSerialValue(rawValue, styleKind) {
  const numericValue = Number(rawValue);
  if (!Number.isFinite(numericValue)) {
    return rawValue;
  }

  const date = new Date(Date.UTC(1899, 11, 30) + Math.round(numericValue * 86400000));
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  const hours = String(date.getUTCHours()).padStart(2, "0");
  const minutes = String(date.getUTCMinutes()).padStart(2, "0");
  const seconds = String(date.getUTCSeconds()).padStart(2, "0");

  if (styleKind === "date") {
    return `${year}-${month}-${day}`;
  }
  if (styleKind === "time") {
    return `${hours}:${minutes}:${seconds}`;
  }
  if (styleKind === "datetime") {
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  return rawValue;
}

function trimEmptyWorksheetRows(rows) {
  const normalized = rows.map((row) => {
    const safeRow = Array.isArray(row) ? [...row] : [];
    while (safeRow.length > 0 && !textOrNull(safeRow[safeRow.length - 1])) {
      safeRow.pop();
    }
    return safeRow.map((value) => String(value ?? ""));
  });

  while (normalized.length > 0 && normalized[normalized.length - 1].every((value) => !textOrNull(value))) {
    normalized.pop();
  }

  return normalized;
}

function matrixToCsv(rows) {
  return `${rows.map((row) => row.map(escapeCsvValue).join(",")).join("\n")}\n`;
}

function escapeCsvValue(value) {
  const text = String(value ?? "");
  if (!/[",\n]/.test(text)) {
    return text;
  }
  return `"${text.replace(/"/g, "\"\"")}"`;
}

function rerunConversionIfPossible() {
  if (!appState.csvText) {
    return;
  }

  runConversion(appState.csvText);
}

function scheduleHeaderEditorRerun() {
  if (headerEditorRerunTimer) {
    clearTimeout(headerEditorRerunTimer);
  }

  headerEditorRerunTimer = window.setTimeout(() => {
    headerEditorRerunTimer = null;
    if (appState.csvText) {
      runConversion(appState.csvText);
    } else {
      renderHeaderEditor(buildHeaderDescriptors([]));
    }
  }, 250);
}

function runConversion(csvText) {
  appState.csvText = csvText;

  try {
    const parsedCsv = parseCSV(csvText);
    appState.originalHeaders = parsedCsv.originalHeaders;
    const headerDescriptors = buildHeaderDescriptors(parsedCsv.originalHeaders, parsedCsv.rowMatrix);
    validateHeaderDescriptors(headerDescriptors);
    const rows = buildRowObjects(parsedCsv.rowMatrix, headerDescriptors);
    const mapping = detectFieldMapping(headerDescriptors);
    const result = buildImportPayloads(rows, mapping, headerDescriptors);
    renderResult(result, mapping, headerDescriptors);
    appState.lastResult = result;
  } catch (error) {
    const message = error instanceof Error ? error.message : t("unknown_error_csv");
    renderFatal(message);
  }
}

function parseCSV(csvText) {
  const sanitized = csvText.replace(/\r\n/g, "\n").replace(/\r/g, "\n").replace(/^\uFEFF/, "");
  const delimiter = detectCsvDelimiter(sanitized);
  const rows = [];
  let currentValue = "";
  let currentRow = [];
  let inQuotes = false;

  for (let index = 0; index < sanitized.length; index += 1) {
    const char = sanitized[index];
    const next = sanitized[index + 1];

    if (char === "\"") {
      if (inQuotes && next === "\"") {
        currentValue += "\"";
        index += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === delimiter && !inQuotes) {
      currentRow.push(currentValue);
      currentValue = "";
      continue;
    }

    if (char === "\n" && !inQuotes) {
      currentRow.push(currentValue);
      rows.push(currentRow);
      currentRow = [];
      currentValue = "";
      continue;
    }

    currentValue += char;
  }

  if (currentValue.length > 0 || currentRow.length > 0) {
    currentRow.push(currentValue);
    rows.push(currentRow);
  }

  const nonEmptyRows = rows.filter((row) => row.some((value) => String(value).trim() !== ""));
  if (nonEmptyRows.length === 0) {
    throw new Error(t("csv_empty"));
  }

  const originalHeaders = nonEmptyRows[0].map((value, index) => ({
    id: `original-${index}`,
    index,
    original: String(value).trim()
  }));
  const rowMatrix = nonEmptyRows.slice(1).map((row) => originalHeaders.map((_, headerIndex) => (
    row[headerIndex] !== undefined ? String(row[headerIndex]).trim() : ""
  )));

  return { originalHeaders, rowMatrix };
}

function detectCsvDelimiter(csvText) {
  const candidates = [",", ";", "\t", "|"];
  const sampleLines = csvText
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .slice(0, 5);

  const scores = new Map(candidates.map((candidate) => [candidate, 0]));

  sampleLines.forEach((line) => {
    const counts = countDelimitersOutsideQuotes(line, candidates);
    candidates.forEach((candidate) => {
      scores.set(candidate, (scores.get(candidate) || 0) + counts[candidate]);
    });
  });

  let bestCandidate = ",";
  let bestScore = -1;

  candidates.forEach((candidate) => {
    const score = scores.get(candidate) || 0;
    if (score > bestScore) {
      bestCandidate = candidate;
      bestScore = score;
    }
  });

  return bestScore > 0 ? bestCandidate : ",";
}

function countDelimitersOutsideQuotes(line, candidates) {
  const counts = Object.fromEntries(candidates.map((candidate) => [candidate, 0]));
  let inQuotes = false;

  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    const next = line[index + 1];

    if (char === "\"") {
      if (inQuotes && next === "\"") {
        index += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (!inQuotes && Object.hasOwn(counts, char)) {
      counts[char] += 1;
    }
  }

  return counts;
}

function buildHeaderDescriptors(originalHeaders, rowMatrix = []) {
  const existingDescriptors = originalHeaders.map((headerMeta) => {
    const edit = appState.headerEdits[headerMeta.id] || {};
    const candidateName = textOrNull(edit.name) || headerMeta.original;
    return {
      token: `original:${headerMeta.id}`,
      original: headerMeta.original,
      originalId: headerMeta.id,
      sourceIndex: headerMeta.index,
      effective: candidateName,
      removed: edit.removed === true,
      isAdded: false,
      normalized: normalizeHeader(candidateName)
    };
  });

  const addedDescriptors = appState.addedHeaders.map((addedHeader) => ({
    token: `added:${addedHeader.id}`,
    original: null,
    effective: addedHeader.name,
    defaultValue: addedHeader.defaultValue || "",
    removed: false,
    isAdded: true,
    addedId: addedHeader.id,
    normalized: normalizeHeader(addedHeader.name)
  }));

  const derivedDescriptors = buildDerivedHeaderDescriptors(
    [...existingDescriptors, ...addedDescriptors],
    rowMatrix
  );

  return [...existingDescriptors, ...addedDescriptors, ...derivedDescriptors];
}

function buildDerivedHeaderDescriptors(baseDescriptors, rowMatrix) {
  const activeDescriptors = baseDescriptors.filter((descriptor) => !descriptor.removed);
  if (hasFieldLikeDescriptor(activeDescriptors, "time_departure")) {
    return [];
  }

  const sourceDescriptor = activeDescriptors.find((descriptor) => (
    Number.isInteger(descriptor.sourceIndex)
    && hasFieldLikeDescriptor([descriptor], "date")
    && columnContainsEmbeddedTime(rowMatrix, descriptor.sourceIndex)
  ));

  if (!sourceDescriptor) {
    return [];
  }

  const derivedId = `${sourceDescriptor.originalId || sourceDescriptor.token}:time_departure`;
  const edit = appState.headerEdits[derivedId] || {};
  const fallbackName = getCanonicalHeaderName("time_departure");
  const candidateName = textOrNull(edit.name) || fallbackName;
  const sampleValue = rowMatrix
    .map((rowValues) => extractClockTextFromDateValue(rowValues[sourceDescriptor.sourceIndex]))
    .find(Boolean) || "";

  sourceDescriptor.autoSplitTarget = candidateName;
  sourceDescriptor.autoSplitSample = sampleValue;

  return [{
    token: `derived:${derivedId}`,
    original: sourceDescriptor.original,
    originalId: sourceDescriptor.originalId,
    sourceIndex: sourceDescriptor.sourceIndex,
    effective: candidateName,
    removed: edit.removed === true,
    isAdded: false,
    isDerived: true,
    derivedId,
    derivedKind: "extract_time_from_datetime",
    sampleValue,
    normalized: normalizeHeader(candidateName)
  }];
}

function hasFieldLikeDescriptor(descriptors, fieldKey) {
  const field = FIELD_DEFINITIONS.find((entry) => entry.key === fieldKey);
  if (!field) {
    return false;
  }

  const aliases = field.aliases.map(normalizeHeader);
  return descriptors.some((descriptor) => aliases.includes(descriptor.normalized));
}

function columnContainsEmbeddedTime(rowMatrix, sourceIndex) {
  return rowMatrix.some((rowValues) => extractClockTextFromDateValue(rowValues[sourceIndex]));
}

function resolveDerivedHeaderValue(descriptor, rowValues) {
  if (descriptor.derivedKind === "extract_time_from_datetime") {
    return extractClockTextFromDateValue(rowValues[descriptor.sourceIndex]) || "";
  }

  return "";
}

function validateHeaderDescriptors(headerDescriptors) {
  const duplicates = new Map();

  headerDescriptors
    .filter((descriptor) => !descriptor.removed)
    .forEach((descriptor) => {
      const duplicateKey = descriptor.normalized || normalizeHeader(descriptor.effective);
      if (!duplicateKey) {
        return;
      }
      if (!duplicates.has(duplicateKey)) {
        duplicates.set(duplicateKey, []);
      }
      duplicates.get(duplicateKey).push(descriptor.effective);
    });

  const conflictingHeaders = Array.from(duplicates.values())
    .filter((names) => names.length > 1)
    .map((names) => names[0]);

  if (conflictingHeaders.length > 0) {
    throw new Error(t("header_override_duplicate_error", {
      headers: conflictingHeaders.join(", ")
    }));
  }
}

function buildRowObjects(rowMatrix, headerDescriptors) {
  const activeDescriptors = headerDescriptors.filter((descriptor) => !descriptor.removed);

  return rowMatrix.map((rowValues, index) => {
    const lineNumber = index + 2;
    if (appState.deletedLines[lineNumber]) {
      return null;
    }

    const object = {};

    headerDescriptors.forEach((descriptor) => {
      if (descriptor.removed) {
        return;
      }

      if (descriptor.isAdded) {
        object[descriptor.effective] = descriptor.defaultValue || "";
        return;
      }

      if (descriptor.isDerived) {
        object[descriptor.effective] = resolveDerivedHeaderValue(descriptor, rowValues);
        return;
      }

      object[descriptor.effective] = rowValues[descriptor.sourceIndex] !== undefined ? rowValues[descriptor.sourceIndex] : "";
    });

    object.__lineNumber = lineNumber;
    object.__fieldOverrides = { ...(appState.rowOverrides[lineNumber] || {}) };
    return object;
  }).filter(Boolean).map((rowObject) => {
    activeDescriptors.forEach((descriptor) => {
      if (!(descriptor.effective in rowObject)) {
        rowObject[descriptor.effective] = "";
      }
    });
    return rowObject;
  });
}

function detectFieldMapping(headerDescriptors) {
  const activeHeaders = headerDescriptors.filter((header) => !header.removed);

  const mapping = {};
  const sources = {};
  const usedTokens = new Set();

  FIELD_DEFINITIONS.forEach((field) => {
    const aliases = field.aliases.map(normalizeHeader);
    const match = activeHeaders.find((header) => aliases.includes(header.normalized));
    mapping[field.key] = match ? match.effective : null;
    sources[field.key] = match || null;
    if (match) {
      usedTokens.add(match.token);
    }
  });

  return {
    fields: mapping,
    sources,
    usedTokens
  };
}

function buildImportPayloads(rows, mapping, headerDescriptors) {
  const errors = [];
  const warnings = [];
  const flights = [];
  const aircraftMap = new Map();
  const pilotMap = new Map();
  const problematicRowsMap = new Map();
  const fileDefaults = readDefaults();

  if (!mapping.fields.date) {
    errors.push(t("error_missing_date_column"));
  }
  if (!mapping.fields.registration) {
    errors.push(t("error_missing_registration_column"));
  }
  if (!mapping.fields.pilot1_last_name) {
    errors.push(t("error_missing_pilot1_column"));
  }
  if (!mapping.fields.aircraft_manufact) {
    errors.push(t("error_missing_manufacturer_column"));
  }
  if (!mapping.fields.aircraft_model) {
    errors.push(t("error_missing_model_column"));
  }
  if (!mapping.fields.time_total_aircraft && !mapping.fields.time_total_simulator) {
    errors.push(t("error_missing_total_time_column"));
  }

  if (errors.length > 0) {
    return {
      fileName: appState.fileName,
      rowCount: rows.length,
      flights: [],
      pilots: [],
      aircrafts: [],
      errors,
      warnings,
      mapping,
      problematicRows: [],
      unusedHeaders: headerDescriptors.filter((descriptor) => !descriptor.removed && !mapping.usedTokens.has(descriptor.token))
    };
  }

  rows.forEach((row) => {
    const lineNumber = row.__lineNumber;
    const isSimulator = resolveSimulatorFlag(row, mapping, fileDefaults);

    const aircraftRegistration = uppercaseOrNull(getValue(row, mapping, "registration"));
    if (!aircraftRegistration) {
      errors.push(t("row_missing_registration", { lineNumber }));
      addProblematicRow(row, lineNumber, t("row_missing_registration", { lineNumber }), ["registration"]);
      return;
    }

    const manufacturer = textOrNull(getValue(row, mapping, "aircraft_manufact"));
    const model = textOrNull(getValue(row, mapping, "aircraft_model"));
    if (!manufacturer) {
      errors.push(t("row_missing_manufacturer", { lineNumber, registration: aircraftRegistration }));
      addProblematicRow(row, lineNumber, t("row_missing_manufacturer", { lineNumber, registration: aircraftRegistration }), ["aircraft_manufact"]);
      return;
    }
    if (!model) {
      errors.push(t("row_missing_model", { lineNumber, registration: aircraftRegistration }));
      addProblematicRow(row, lineNumber, t("row_missing_model", { lineNumber, registration: aircraftRegistration }), ["aircraft_model"]);
      return;
    }

    const pilotBundle = buildPilotsForRow(row, mapping, fileDefaults, lineNumber, warnings, errors);
    if (!pilotBundle) {
      return;
    }

    const rawDateValue = textOrNull(getValue(row, mapping, "date"));
    const baseDate = parseFlexibleDate(rawDateValue);
    if (!baseDate) {
      errors.push(t("row_invalid_date", { lineNumber }));
      addProblematicRow(row, lineNumber, t("row_invalid_date", { lineNumber }), ["date"]);
      return;
    }

    const rawAircraftTotal = textOrNull(getValue(row, mapping, "time_total_aircraft"));
    const rawSimulatorTotal = textOrNull(getValue(row, mapping, "time_total_simulator"));
    const aircraftTotal = normalizeDuration(rawAircraftTotal);
    const simulatorTotal = normalizeDuration(rawSimulatorTotal);
    const fallbackTotal = aircraftTotal || simulatorTotal || normalizeDuration(textOrNull(getValue(row, mapping, "time_total_aircraft")));

    if (!aircraftTotal && !simulatorTotal && !fallbackTotal) {
      errors.push(t("row_invalid_total_time", { lineNumber }));
      addProblematicRow(row, lineNumber, t("row_invalid_total_time", { lineNumber }), ["time_total_aircraft", "time_total_simulator"]);
      return;
    }

    const inferredDepartureClock = extractClockTextFromDateValue(rawDateValue);
    const timeDeparture = buildDateTime(
      baseDate,
      textOrNull(getValue(row, mapping, "time_departure")) || inferredDepartureClock,
      null
    );
    const totalMinutes = durationToMinutes(simulatorTotal || aircraftTotal || fallbackTotal);
    const timeArrival = buildDateTime(
      baseDate,
      textOrNull(getValue(row, mapping, "time_arrival")),
      timeDeparture && Number.isFinite(totalMinutes) ? new Date(timeDeparture.getTime() + totalMinutes * 60000) : timeDeparture
    );

    if (!timeDeparture || !timeArrival) {
      errors.push(t("row_invalid_times", { lineNumber }));
      addProblematicRow(row, lineNumber, t("row_invalid_times", { lineNumber }), ["time_departure", "time_arrival"]);
      return;
    }

    const departureAirport = uppercaseOrNull(getValue(row, mapping, "departure_airport"));
    const arrivalAirport = uppercaseOrNull(getValue(row, mapping, "arrival_airport"));

    if (!isSimulator) {
      if (!departureAirport) {
        errors.push(t("row_missing_departure_airport", { lineNumber }));
        addProblematicRow(row, lineNumber, t("row_missing_departure_airport", { lineNumber }), ["departure_airport"]);
        return;
      }
      if (!arrivalAirport) {
        errors.push(t("row_missing_arrival_airport", { lineNumber }));
        addProblematicRow(row, lineNumber, t("row_missing_arrival_airport", { lineNumber }), ["arrival_airport"]);
        return;
      }
    }

    const aircraft = upsertAircraft(aircraftMap, {
      registration: aircraftRegistration,
      manufact: manufacturer,
      model,
      variant: textOrNull(getValue(row, mapping, "aircraft_variant")),
      typeRating: textOrNull(getValue(row, mapping, "aircraft_type_rating")),
      company: textOrNull(getValue(row, mapping, "aircraft_company")) || fileDefaults.aircraftCompany || null,
      notes: textOrNull(getValue(row, mapping, "aircraft_notes")),
      type: resolveAircraftType(row, mapping, fileDefaults, isSimulator),
      simulatorCategory: textOrNull(getValue(row, mapping, "aircraft_simulator_category")),
      aircraftClass: textOrNull(getValue(row, mapping, "aircraft_class")) || fileDefaults.aircraftClass,
      subClassSea: parseBooleanValue(getValue(row, mapping, "aircraft_sub_class_sea"), false),
      multiPilot: parseBooleanValue(getValue(row, mapping, "aircraft_multi_pilot"), false),
      engineType: textOrNull(getValue(row, mapping, "aircraft_engine_type")) || fileDefaults.engineType,
      multiEngine: parseBooleanValue(getValue(row, mapping, "aircraft_multi_engine"), false),
      isComplex: parseBooleanValue(getValue(row, mapping, "aircraft_is_complex"), false),
      isHighPerformance: parseBooleanValue(getValue(row, mapping, "aircraft_is_high_performance"), false),
      isHeavy: parseBooleanValue(getValue(row, mapping, "aircraft_is_heavy"), false),
      isEFIS: parseBooleanValue(getValue(row, mapping, "aircraft_is_efis"), false),
      hasTailwheel: parseBooleanValue(getValue(row, mapping, "aircraft_has_tailwheel"), false),
      isGlider: parseBooleanValue(getValue(row, mapping, "aircraft_is_glider"), false),
      isUltralight: parseBooleanValue(getValue(row, mapping, "aircraft_is_ultralight"), false),
      isTMG: parseBooleanValue(getValue(row, mapping, "aircraft_is_tmg"), false),
      isAerobatic: parseBooleanValue(getValue(row, mapping, "aircraft_is_aerobatic"), false)
    }, lineNumber, warnings);

    const timeTakeoff = buildOptionalDateTime(baseDate, textOrNull(getValue(row, mapping, "time_takeoff")));
    const timeLanding = buildOptionalDateTime(baseDate, textOrNull(getValue(row, mapping, "time_landing")));

    flights.push({
      id: crypto.randomUUID(),
      date: toIsoString(timeDeparture),
      aircraftId: aircraft.id,
      registration: aircraft.registration,
      flightNumber: textOrNull(getValue(row, mapping, "flight_number")) || "",
      isSimulator,
      departureAirport: departureAirport || "",
      arrivalAirport: arrivalAirport || "",
      departureRunway: textOrNull(getValue(row, mapping, "departure_runway")),
      arrivalRunway: textOrNull(getValue(row, mapping, "arrival_runway")),
      timeDeparture: toIsoString(timeDeparture),
      timeArrival: toIsoString(timeArrival),
      timeTakeoff: timeTakeoff ? toIsoString(timeTakeoff) : null,
      timeLanding: timeLanding ? toIsoString(timeLanding) : null,
      timeHobbsDeparture: textOrNull(getValue(row, mapping, "time_hobbs_departure")),
      timeHobbsArrival: textOrNull(getValue(row, mapping, "time_hobbs_arrival")),
      holdingCount: parseIntegerValue(getValue(row, mapping, "holding_count"), 0),
      ifrApproachCount: parseIntegerValue(getValue(row, mapping, "ifr_approach_count"), 0),
      timeTotalAircraft: isSimulator ? "00:00" : aircraftTotal || fallbackTotal || "00:00",
      timeTotalSimulator: isSimulator ? simulatorTotal || aircraftTotal || fallbackTotal || "00:00" : "00:00",
      timeAir: normalizeDuration(textOrNull(getValue(row, mapping, "time_air"))),
      timePIC: normalizeDuration(textOrNull(getValue(row, mapping, "time_pic"))) || "00:00",
      timeSIC: normalizeDuration(textOrNull(getValue(row, mapping, "time_sic"))) || "00:00",
      timeDual: normalizeDuration(textOrNull(getValue(row, mapping, "time_dual"))) || "00:00",
      timePICUS: normalizeDuration(textOrNull(getValue(row, mapping, "time_picus"))) || "00:00",
      timeInstructor: normalizeDuration(textOrNull(getValue(row, mapping, "time_instructor"))) || "00:00",
      timeExaminer: normalizeDuration(textOrNull(getValue(row, mapping, "time_examiner"))) || "00:00",
      timeNight: normalizeDuration(textOrNull(getValue(row, mapping, "time_night"))) || "00:00",
      timeIFR: normalizeDuration(textOrNull(getValue(row, mapping, "time_ifr"))) || "00:00",
      timeXC: normalizeDuration(textOrNull(getValue(row, mapping, "time_xc"))) || "00:00",
      timeRelief: normalizeDuration(textOrNull(getValue(row, mapping, "time_relief"))) || "00:00",
      timeActual: normalizeDuration(textOrNull(getValue(row, mapping, "time_actual"))) || "00:00",
      pilot1Id: pilotBundle.pilot1.id,
      pilot2Id: pilotBundle.pilot2?.id || null,
      pilot3Id: pilotBundle.pilot3?.id || null,
      pilot4Id: pilotBundle.pilot4?.id || null,
      pilot1Name: pilotBundle.pilot1.lastName,
      pilot2Name: pilotBundle.pilot2?.lastName || null,
      pilot3Name: pilotBundle.pilot3?.lastName || null,
      pilot4Name: pilotBundle.pilot4?.lastName || null,
      landingsDay: parseIntegerValue(getValue(row, mapping, "landings_day"), 0),
      landingsNight: parseIntegerValue(getValue(row, mapping, "landings_night"), 0),
      takeoffsDay: parseIntegerValue(getValue(row, mapping, "takeoffs_day"), 0),
      takeoffsNight: parseIntegerValue(getValue(row, mapping, "takeoffs_night"), 0),
      pilotFlying: parseBooleanValue(getValue(row, mapping, "pilot_flying"), true),
      remarks: textOrNull(getValue(row, mapping, "remarks")) || "",
      userTimeValue: null,
      userTextValue: null,
      userBoolValue: false,
      signatureData: null
    });
  });

  const pilots = Array.from(pilotMap.values()).sort(compareByName);
  const aircrafts = Array.from(aircraftMap.values()).sort((left, right) => left.registration.localeCompare(right.registration));

  const downloads = {
    "Flights.json": flights,
    "Pilots.json": pilots,
    "Aircrafts.json": aircrafts
  };

  return {
    fileName: appState.fileName,
    rowCount: rows.length,
    flights,
    pilots,
    aircrafts,
    downloads,
    errors,
    warnings,
    mapping,
    problematicRows: Array.from(problematicRowsMap.values()).sort((left, right) => left.lineNumber - right.lineNumber),
    unusedHeaders: headerDescriptors.filter((descriptor) => !descriptor.removed && !mapping.usedTokens.has(descriptor.token))
  };

  function buildPilotsForRow(rowData, detectedMapping, defaults, lineNumber, warningList, errorList) {
    const bundle = {};

    for (const role of ROLE_KEYS) {
      const rawFirstName = textOrNull(getValue(rowData, detectedMapping, `${role}_first_name`));
      const rawPilotValue = textOrNull(getValue(rowData, detectedMapping, `${role}_last_name`));
      const extractedIdentity = extractPilotIdentity(rawFirstName, rawPilotValue, role, detectedMapping.fields[`${role}_last_name`]);
      const firstName = extractedIdentity.firstName;
      const lastName = extractedIdentity.lastName;
      const company = textOrNull(getValue(rowData, detectedMapping, `${role}_company`)) || defaults.pilotCompany || null;
      const code = textOrNull(getValue(rowData, detectedMapping, `${role}_code`));
      const phone = textOrNull(getValue(rowData, detectedMapping, `${role}_phone`));
      const email = textOrNull(getValue(rowData, detectedMapping, `${role}_email`));

      const hasAnyPilotValue = [firstName, lastName, company, code, phone, email].some(Boolean);
      if (!hasAnyPilotValue) {
        bundle[role] = null;
        continue;
      }

      if (!lastName) {
        errorList.push(t("row_role_missing_last_name", { lineNumber, role: getRoleLabel(role) }));
        addProblematicRow(rowData, lineNumber, t("row_role_missing_last_name", { lineNumber, role: getRoleLabel(role) }), [`${role}_last_name`, `${role}_first_name`]);
        return null;
      }

      const pilotKey = normalizePilotKey(firstName, lastName);
      let pilot = pilotMap.get(pilotKey);
      if (!pilot) {
        pilot = {
          id: crypto.randomUUID(),
          firstName,
          lastName,
          company,
          code,
          phone,
          email,
          notes: null
        };
        pilotMap.set(pilotKey, pilot);
      } else {
        mergePilotFields(pilot, { firstName, lastName, company, code, phone, email }, lineNumber, role, warningList);
      }

      bundle[role] = pilot;
    }

    if (!bundle.pilot1) {
      errorList.push(t("row_pilot1_required", { lineNumber }));
      addProblematicRow(rowData, lineNumber, t("row_pilot1_required", { lineNumber }), ["pilot1_last_name", "pilot1_first_name"]);
      return null;
    }

    return bundle;
  }

  function addProblematicRow(rowData, lineNumber, message, fieldKeys) {
    if (!problematicRowsMap.has(lineNumber)) {
      problematicRowsMap.set(lineNumber, {
        lineNumber,
        rowData,
        messages: [],
        fieldKeys: []
      });
    }

    const current = problematicRowsMap.get(lineNumber);
    if (!current.messages.includes(message)) {
      current.messages.push(message);
    }
    fieldKeys.forEach((fieldKey) => {
      if (fieldKey && !current.fieldKeys.includes(fieldKey)) {
        current.fieldKeys.push(fieldKey);
      }
    });
  }
}

function mergePilotFields(existingPilot, incomingPilot, lineNumber, role, warnings) {
  ["firstName", "company", "code", "phone", "email"].forEach((field) => {
    if (!existingPilot[field] && incomingPilot[field]) {
      existingPilot[field] = incomingPilot[field];
    } else if (existingPilot[field] && incomingPilot[field] && existingPilot[field] !== incomingPilot[field]) {
      warnings.push(t("warning_conflicting_pilot_field", {
        lineNumber,
        role: getRoleLabel(role),
        field: getPilotFieldLabel(field),
        lastName: existingPilot.lastName
      }));
    }
  });
}

function upsertAircraft(aircraftMap, incomingAircraft, lineNumber, warnings) {
  const key = normalizeHeader(incomingAircraft.registration);
  const existingAircraft = aircraftMap.get(key);

  if (!existingAircraft) {
    const createdAircraft = {
      id: crypto.randomUUID(),
      registration: incomingAircraft.registration,
      manufact: incomingAircraft.manufact,
      model: incomingAircraft.model,
      variant: incomingAircraft.variant || null,
      typeRating: incomingAircraft.typeRating || null,
      company: incomingAircraft.company || null,
      notes: incomingAircraft.notes || null,
      isTemplate: false,
      type: incomingAircraft.type,
      simulatorCategory: incomingAircraft.simulatorCategory || null,
      aircraftClass: incomingAircraft.aircraftClass,
      subClassSea: incomingAircraft.subClassSea,
      multiPilot: incomingAircraft.multiPilot,
      engineType: incomingAircraft.engineType,
      multiEngine: incomingAircraft.multiEngine,
      isComplex: incomingAircraft.isComplex,
      isHighPerformance: incomingAircraft.isHighPerformance,
      isHeavy: incomingAircraft.isHeavy,
      isEFIS: incomingAircraft.isEFIS,
      hasTailwheel: incomingAircraft.hasTailwheel,
      isGlider: incomingAircraft.isGlider,
      isUltralight: incomingAircraft.isUltralight,
      isTMG: incomingAircraft.isTMG,
      isAerobatic: incomingAircraft.isAerobatic
    };
    aircraftMap.set(key, createdAircraft);
    return createdAircraft;
  }

  [
    "manufact",
    "model",
    "variant",
    "typeRating",
    "company",
    "notes",
    "type",
    "simulatorCategory",
    "aircraftClass",
    "engineType"
  ].forEach((field) => {
    if (!existingAircraft[field] && incomingAircraft[field]) {
      existingAircraft[field] = incomingAircraft[field];
    } else if (existingAircraft[field] && incomingAircraft[field] && existingAircraft[field] !== incomingAircraft[field]) {
      warnings.push(t("warning_conflicting_aircraft_field", {
        lineNumber,
        field: getAircraftFieldLabel(field),
        registration: existingAircraft.registration
      }));
    }
  });

  [
    "subClassSea",
    "multiPilot",
    "multiEngine",
    "isComplex",
    "isHighPerformance",
    "isHeavy",
    "isEFIS",
    "hasTailwheel",
    "isGlider",
    "isUltralight",
    "isTMG",
    "isAerobatic"
  ].forEach((field) => {
    existingAircraft[field] = existingAircraft[field] || incomingAircraft[field];
  });

  return existingAircraft;
}

function resolveSimulatorFlag(row, mapping, defaults) {
  const explicit = getValue(row, mapping, "is_simulator");
  if (explicit) {
    return parseBooleanValue(explicit, false);
  }

  const explicitType = textOrNull(getValue(row, mapping, "aircraft_type"));
  if (explicitType && explicitType.toLowerCase() === "simulator") {
    return true;
  }

  if (defaults.aircraftType === "Simulator") {
    return true;
  }

  return false;
}

function resolveAircraftType(row, mapping, defaults, isSimulator) {
  const explicitType = textOrNull(getValue(row, mapping, "aircraft_type"));
  if (explicitType) {
    return explicitType;
  }
  if (isSimulator) {
    return "Simulator";
  }
  return defaults.aircraftType || "Aircraft";
}

function extractPilotIdentity(firstName, rawValue, role, matchedHeader) {
  if (!rawValue) {
    return { firstName, lastName: null };
  }

  if (rawValue.includes(",")) {
    const [lastNamePart, firstNamePart] = rawValue.split(",");
    return {
      firstName: firstName || textOrNull(firstNamePart),
      lastName: textOrNull(lastNamePart)
    };
  }

  const normalizedMatchedHeader = normalizeHeader(matchedHeader);
  if (!firstName && normalizedMatchedHeader === "name" && rawValue.includes(" ")) {
    const segments = rawValue.split(/\s+/).filter(Boolean);
    if (segments.length >= 2) {
      return {
        firstName: segments.slice(0, -1).join(" "),
        lastName: segments[segments.length - 1] || rawValue
      };
    }
  }

  return { firstName, lastName: rawValue };
}

function getValue(row, mapping, key) {
  const overriddenValue = row.__fieldOverrides && Object.hasOwn(row.__fieldOverrides, key)
    ? row.__fieldOverrides[key]
    : null;
  if (overriddenValue !== null) {
    return overriddenValue;
  }
  const header = mapping.fields[key];
  return header ? row[header] : "";
}

function normalizeHeader(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
}

function textOrNull(value) {
  const text = String(value || "").trim();
  return text ? text : null;
}

function uppercaseOrNull(value) {
  const text = textOrNull(value);
  return text ? text.toUpperCase() : null;
}

function parseBooleanValue(value, fallback) {
  if (value === null || value === undefined || String(value).trim() === "") {
    return fallback;
  }

  const normalized = String(value).trim().toLowerCase();
  if (["true", "1", "yes", "y", "oui", "vrai", "si", "ja", "evet", "да", "نعم"].includes(normalized)) {
    return true;
  }
  if (["false", "0", "no", "n", "non", "faux", "nein", "hayir", "нет", "لا"].includes(normalized)) {
    return false;
  }

  return fallback;
}

function parseIntegerValue(value, fallback) {
  const text = textOrNull(value);
  if (!text) {
    return fallback;
  }

  const parsed = Number.parseInt(text, 10);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function normalizeDuration(value) {
  const text = textOrNull(value);
  if (!text) {
    return null;
  }

  const compact = text.replace(",", ".").trim();

  if (/^\d{1,2}:\d{2}$/.test(compact)) {
    return compact.padStart(5, "0");
  }

  if (/^\d{1,2}:\d{2}:\d{2}$/.test(compact)) {
    const [hours, minutes] = compact.split(":");
    return `${hours.padStart(2, "0")}:${minutes}`;
  }

  if (/^\d+(\.\d+)?$/.test(compact)) {
    const numeric = Number.parseFloat(compact);
    if (!Number.isFinite(numeric)) {
      return null;
    }
    const minutes = Math.round(numeric * 60);
    return formatMinutes(minutes);
  }

  return null;
}

function durationToMinutes(value) {
  const normalized = normalizeDuration(value);
  if (!normalized) {
    return Number.NaN;
  }
  const [hours, minutes] = normalized.split(":").map((segment) => Number.parseInt(segment, 10));
  return hours * 60 + minutes;
}

function formatMinutes(totalMinutes) {
  const minutes = Math.max(0, Number(totalMinutes) || 0);
  const hours = Math.floor(minutes / 60);
  const remainder = minutes % 60;
  return `${String(hours).padStart(2, "0")}:${String(remainder).padStart(2, "0")}`;
}

function parseFlexibleDate(value) {
  const text = normalizeLooseDateTimeText(value);
  if (!text) {
    return null;
  }

  const directDate = new Date(text);
  if (!Number.isNaN(directDate.getTime())) {
    return directDate;
  }

  const isoDateMatch = text.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (isoDateMatch) {
    const [, year, month, day] = isoDateMatch;
    return new Date(Date.UTC(Number(year), Number(month) - 1, Number(day), 0, 0, 0));
  }

  const frDateMatch = text.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (frDateMatch) {
    const [, day, month, year] = frDateMatch;
    return new Date(Date.UTC(Number(year), Number(month) - 1, Number(day), 0, 0, 0));
  }

  const frDateDashMatch = text.match(/^(\d{2})-(\d{2})-(\d{4})$/);
  if (frDateDashMatch) {
    const [, day, month, year] = frDateDashMatch;
    return new Date(Date.UTC(Number(year), Number(month) - 1, Number(day), 0, 0, 0));
  }

  return null;
}

function extractClockTextFromDateValue(value) {
  const text = normalizeLooseDateTimeText(value);
  if (!text) {
    return null;
  }

  const isoMatch = text.match(/[T\s](\d{2}:\d{2})(?::\d{2})?(?:\.\d+)?(?:\s*(?:Z|[+-]\d{2}:?\d{2}))?$/i);
  if (isoMatch) {
    return isoMatch[1];
  }

  return null;
}

function normalizeLooseDateTimeText(value) {
  const source = textOrNull(value);
  if (!source) {
    return null;
  }

  let normalized = source.replace(/\s+/g, " ").trim();

  normalized = normalized.replace(
    /^(\d{4})[.\-/](\d{2})[.\-/](\d{2})(.*)$/,
    (_, year, month, day, suffix) => `${year}-${month}-${day}${suffix || ""}`
  );

  normalized = normalized.replace(
    /^(\d{2})[.\-/](\d{2})[.\-/](\d{4})(.*)$/,
    (_, day, month, year, suffix) => `${year}-${month}-${day}${suffix || ""}`
  );

  normalized = normalized.replace(/^(\d{4}-\d{2}-\d{2}) (\d{2}:\d{2}(?::\d{2})?(?:\.\d+)?)(.*)$/, (_, datePart, timePart, suffix) => {
    return `${datePart}T${timePart}${suffix || ""}`;
  });

  normalized = normalized.replace(/\s+Z$/i, "Z");
  normalized = normalized.replace(/\s+([+-]\d{2}:?\d{2})$/i, "$1");

  return normalized;
}

function parseClockValue(value) {
  const text = textOrNull(value);
  if (!text) {
    return null;
  }

  if (/^\d{1,2}:\d{2}$/.test(text)) {
    const [hours, minutes] = text.split(":").map(Number);
    return { hours, minutes, seconds: 0 };
  }

  if (/^\d{1,2}:\d{2}:\d{2}$/.test(text)) {
    const [hours, minutes, seconds] = text.split(":").map(Number);
    return { hours, minutes, seconds };
  }

  if (/^\d{4}$/.test(text)) {
    return {
      hours: Number(text.slice(0, 2)),
      minutes: Number(text.slice(2, 4)),
      seconds: 0
    };
  }

  return null;
}

function buildDateTime(baseDate, clockText, fallbackDate) {
  const clock = parseClockValue(clockText);
  if (clock) {
    return new Date(Date.UTC(
      baseDate.getUTCFullYear(),
      baseDate.getUTCMonth(),
      baseDate.getUTCDate(),
      clock.hours,
      clock.minutes,
      clock.seconds
    ));
  }

  if (clockText) {
    return null;
  }

  if (fallbackDate) {
    return fallbackDate;
  }

  return new Date(Date.UTC(
    baseDate.getUTCFullYear(),
    baseDate.getUTCMonth(),
    baseDate.getUTCDate(),
    baseDate.getUTCHours(),
    baseDate.getUTCMinutes(),
    baseDate.getUTCSeconds()
  ));
}

function buildOptionalDateTime(baseDate, clockText) {
  if (!clockText) {
    return null;
  }

  return buildDateTime(baseDate, clockText, null);
}

function toIsoString(value) {
  return value.toISOString().replace(".000Z", "Z");
}

function readDefaults() {
  return {
    aircraftType: dom.defaultAircraftType.value,
    aircraftClass: dom.defaultAircraftClass.value,
    engineType: dom.defaultEngineType.value,
    aircraftCompany: textOrNull(dom.defaultAircraftCompany.value),
    pilotCompany: textOrNull(dom.defaultPilotCompany.value)
  };
}

function normalizePilotKey(firstName, lastName) {
  return `${normalizeHeader(firstName || "")}|${normalizeHeader(lastName || "")}`;
}

function compareByName(left, right) {
  return `${left.lastName} ${left.firstName || ""}`.localeCompare(`${right.lastName} ${right.firstName || ""}`);
}

function resetHeaderEditorState() {
  if (headerEditorRerunTimer) {
    clearTimeout(headerEditorRerunTimer);
    headerEditorRerunTimer = null;
  }
  appState.originalHeaders = [];
  appState.headerEdits = {};
  appState.addedHeaders = [];
  appState.rowOverrides = {};
  appState.rowDrafts = {};
  appState.deletedLines = {};
  appState.expandedProblemLine = null;
  appState.lastResult = null;
}

function resetHeaderEditor() {
  resetHeaderEditorState();

  if (appState.csvText) {
    runConversion(appState.csvText);
  } else {
    renderInitialState();
  }
}

function addManualHeader() {
  const nextIndex = appState.addedHeaders.length + 1;
  appState.addedHeaders.push({
    id: crypto.randomUUID(),
    name: `new_column_${nextIndex}`,
    defaultValue: ""
  });

  if (appState.csvText) {
    runConversion(appState.csvText);
  } else {
    renderHeaderEditor(buildHeaderDescriptors([]));
  }
}

function handleHeaderEditorChange(event) {
  const defaultInput = event.target.closest("[data-header-default-input]");
  if (defaultInput) {
    const addedId = defaultInput.dataset.addedHeaderId;
    const targetHeader = appState.addedHeaders.find((header) => header.id === addedId);
    if (targetHeader) {
      targetHeader.defaultValue = String(defaultInput.value || "");
    }

    if (event.type === "input") {
      return;
    }
    scheduleHeaderEditorRerun();
    return;
  }

  const input = event.target.closest("[data-header-input]");
  if (!input) {
    return;
  }

  const rowType = input.dataset.rowType;
  const nextValue = String(input.value || "");

  if (rowType === "original") {
    const originalHeaderId = input.dataset.originalHeaderId;
    const originalHeaderValue = input.dataset.originalHeaderValue || "";
    const currentEdit = appState.headerEdits[originalHeaderId] || {};

    if (!nextValue || nextValue === originalHeaderValue) {
      const nextEdit = { ...currentEdit };
      delete nextEdit.name;
      if (Object.keys(nextEdit).length === 0) {
        delete appState.headerEdits[originalHeaderId];
      } else {
        appState.headerEdits[originalHeaderId] = nextEdit;
      }
    } else {
      appState.headerEdits[originalHeaderId] = {
        ...currentEdit,
        name: nextValue
      };
    }
  }

  if (rowType === "added") {
    const addedId = input.dataset.addedHeaderId;
    const targetHeader = appState.addedHeaders.find((header) => header.id === addedId);
    if (targetHeader) {
      targetHeader.name = nextValue || targetHeader.name;
    }
  }

  if (rowType === "derived") {
    const derivedHeaderId = input.dataset.derivedHeaderId;
    const fallbackName = getCanonicalHeaderName("time_departure");
    const currentEdit = appState.headerEdits[derivedHeaderId] || {};

    if (!nextValue || nextValue === fallbackName) {
      const nextEdit = { ...currentEdit };
      delete nextEdit.name;
      if (Object.keys(nextEdit).length === 0) {
        delete appState.headerEdits[derivedHeaderId];
      } else {
        appState.headerEdits[derivedHeaderId] = nextEdit;
      }
    } else {
      appState.headerEdits[derivedHeaderId] = {
        ...currentEdit,
        name: nextValue
      };
    }
  }

  if (event.type === "input") {
    return;
  }
  scheduleHeaderEditorRerun();
}

function handleProblematicRowInput(event) {
  const input = event.target.closest("[data-problem-row-input]");
  if (!input) {
    return;
  }

  const lineNumber = Number.parseInt(input.dataset.lineNumber || "", 10);
  const fieldKey = input.dataset.fieldKey;
  if (!Number.isFinite(lineNumber) || !fieldKey) {
    return;
  }

  if (!appState.rowDrafts[lineNumber]) {
    appState.rowDrafts[lineNumber] = {};
  }

  appState.rowDrafts[lineNumber][fieldKey] = String(input.value || "");
}

function handleBlockingErrorListClick(event) {
  const item = event.target.closest("[data-problem-toggle-line]");
  if (!item) {
    return;
  }

  const lineNumber = Number.parseInt(item.dataset.problemToggleLine || "", 10);
  if (!Number.isFinite(lineNumber)) {
    return;
  }

  toggleProblemRowPanel(lineNumber);
}

function handleBlockingErrorListKeydown(event) {
  const item = event.target.closest("[data-problem-toggle-line]");
  if (!item || !["Enter", " "].includes(event.key)) {
    return;
  }

  event.preventDefault();
  const lineNumber = Number.parseInt(item.dataset.problemToggleLine || "", 10);
  if (!Number.isFinite(lineNumber)) {
    return;
  }

  toggleProblemRowPanel(lineNumber);
}

function handleBlockingErrorAction(event) {
  const button = event.target.closest("[data-problem-action]");
  if (!button) {
    return;
  }

  const action = button.dataset.problemAction;
  const lineNumber = Number.parseInt(button.dataset.lineNumber || "", 10);
  if (!Number.isFinite(lineNumber)) {
    return;
  }

  if (action === "close") {
    closeProblemRowPanel();
    return;
  }

  if (!appState.lastResult?.mapping) {
    return;
  }

  if (action === "save") {
    saveProblematicRowChanges(lineNumber, appState.lastResult.mapping);
    return;
  }

  if (action === "delete") {
    delete appState.rowDrafts[lineNumber];
    delete appState.rowOverrides[lineNumber];
    appState.deletedLines[lineNumber] = true;
    appState.expandedProblemLine = null;
    rerunConversionIfPossible();
  }
}

function toggleProblemRowPanel(lineNumber) {
  appState.expandedProblemLine = appState.expandedProblemLine === lineNumber ? null : lineNumber;
  renderBlockingErrors(appState.lastResult, appState.lastResult?.mapping || null);
  renderProblemRowPanel(appState.lastResult, appState.lastResult?.mapping || null);
}

function closeProblemRowPanel() {
  appState.expandedProblemLine = null;
  renderBlockingErrors(appState.lastResult, appState.lastResult?.mapping || null);
  renderProblemRowPanel(appState.lastResult, appState.lastResult?.mapping || null);
}

function saveProblematicRowChanges(lineNumber, mapping) {
  const problematicRow = appState.lastResult?.problematicRows?.find((row) => row.lineNumber === lineNumber);
  if (!problematicRow) {
    return;
  }

  const editableFieldKeys = resolveProblematicRowFieldKeys(problematicRow, mapping);
  const draftValues = appState.rowDrafts[lineNumber] || {};
  const nextOverrides = {};

  editableFieldKeys.forEach((fieldKey) => {
    const nextValue = Object.hasOwn(draftValues, fieldKey)
      ? draftValues[fieldKey]
      : String(getValue(problematicRow.rowData, mapping, fieldKey) || "");
    const baseValue = getBaseRowValue(problematicRow.rowData, mapping, fieldKey);
    if (nextValue !== baseValue) {
      nextOverrides[fieldKey] = nextValue;
    }
  });

  if (Object.keys(nextOverrides).length > 0) {
    appState.rowOverrides[lineNumber] = nextOverrides;
  } else {
    delete appState.rowOverrides[lineNumber];
  }

  delete appState.rowDrafts[lineNumber];
  rerunConversionIfPossible();
}

function handleHeaderEditorAction(event) {
  const button = event.target.closest("[data-header-action]");
  if (!button) {
    return;
  }

  const action = button.dataset.headerAction;
  const originalHeaderId = button.dataset.originalHeaderId;
  const addedHeaderId = button.dataset.addedHeaderId;
  const derivedHeaderId = button.dataset.derivedHeaderId;

  if (action === "remove" && originalHeaderId) {
    appState.headerEdits[originalHeaderId] = {
      ...(appState.headerEdits[originalHeaderId] || {}),
      removed: true
    };
  }

  if (action === "restore" && originalHeaderId) {
    const currentEdit = { ...(appState.headerEdits[originalHeaderId] || {}) };
    delete currentEdit.removed;
    if (Object.keys(currentEdit).length === 0) {
      delete appState.headerEdits[originalHeaderId];
    } else {
      appState.headerEdits[originalHeaderId] = currentEdit;
    }
  }

  if (action === "delete" && addedHeaderId) {
    appState.addedHeaders = appState.addedHeaders.filter((header) => header.id !== addedHeaderId);
  }

  if (action === "remove" && derivedHeaderId) {
    appState.headerEdits[derivedHeaderId] = {
      ...(appState.headerEdits[derivedHeaderId] || {}),
      removed: true
    };
  }

  if (action === "restore" && derivedHeaderId) {
    const currentEdit = { ...(appState.headerEdits[derivedHeaderId] || {}) };
    delete currentEdit.removed;
    if (Object.keys(currentEdit).length === 0) {
      delete appState.headerEdits[derivedHeaderId];
    } else {
      appState.headerEdits[derivedHeaderId] = currentEdit;
    }
  }

  if (appState.csvText) {
    runConversion(appState.csvText);
  } else {
    renderHeaderEditor(buildHeaderDescriptors([]));
  }
}

function findMatchingFieldDescriptor(headerName) {
  const normalizedHeader = normalizeHeader(headerName);
  if (!normalizedHeader) {
    return null;
  }

  return FIELD_DEFINITIONS.find((field) => field.aliases.map(normalizeHeader).includes(normalizedHeader)) || null;
}

function getCanonicalHeaderName(fieldKey) {
  const field = FIELD_DEFINITIONS.find((entry) => entry.key === fieldKey);
  return field ? field.aliases[0] : fieldKey;
}

function handleExpectedFieldDragStart(event) {
  const card = event.target.closest("[data-field-key]");
  if (!card || !event.dataTransfer) {
    return;
  }

  event.dataTransfer.setData("text/plain", card.dataset.fieldKey);
  event.dataTransfer.effectAllowed = "copy";
}

function handleHeaderDropTarget(event) {
  const dropzone = event.target.closest("[data-header-dropzone]");
  if (!dropzone) {
    return;
  }

  if (event.type === "dragover") {
    event.preventDefault();
    clearActiveDropzones();
    dropzone.classList.add("dropzone-active");
    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = "copy";
    }
    return;
  }

  if (event.type === "drop") {
    event.preventDefault();
    clearActiveDropzones();
    const fieldKey = event.dataTransfer?.getData("text/plain");
    if (!fieldKey) {
      return;
    }

    applyExpectedFieldToHeader(dropzone, fieldKey);
  }
}

function handleHeaderDropLeave(event) {
  const dropzone = event.target.closest("[data-header-dropzone]");
  if (!dropzone) {
    return;
  }

  const relatedTarget = event.relatedTarget;
  if (relatedTarget && dropzone.contains(relatedTarget)) {
    return;
  }

  dropzone.classList.remove("dropzone-active");
}

function clearActiveDropzones() {
  document.querySelectorAll(".header-dropzone.dropzone-active").forEach((element) => {
    element.classList.remove("dropzone-active");
  });
}

function applyExpectedFieldToHeader(dropzone, fieldKey) {
  const canonicalName = getCanonicalHeaderName(fieldKey);
  const rowType = dropzone.dataset.rowType;

  if (rowType === "original") {
    const originalHeaderId = dropzone.dataset.originalHeaderId;
    const currentEdit = appState.headerEdits[originalHeaderId] || {};
    appState.headerEdits[originalHeaderId] = {
      ...currentEdit,
      name: canonicalName,
      removed: false
    };
  }

  if (rowType === "added") {
    const addedId = dropzone.dataset.addedHeaderId;
    const targetHeader = appState.addedHeaders.find((header) => header.id === addedId);
    if (targetHeader) {
      targetHeader.name = canonicalName;
    }
  }

  if (rowType === "derived") {
    const derivedHeaderId = dropzone.dataset.derivedHeaderId;
    appState.headerEdits[derivedHeaderId] = {
      ...(appState.headerEdits[derivedHeaderId] || {}),
      name: canonicalName,
      removed: false
    };
  }

  if (appState.csvText) {
    runConversion(appState.csvText);
  } else {
    renderHeaderEditor(buildHeaderDescriptors([]));
  }
}

function renderExpectedFieldsPalette() {
  if (!dom.expectedFieldsPalette) {
    return;
  }

  dom.expectedFieldsPalette.innerHTML = FIELD_DEFINITIONS.map((field) => `
    <button
      class="expected-field-card ${field.required ? "required" : "optional"}"
      type="button"
      draggable="true"
      data-field-key="${escapeHtml(field.key)}"
      title="${escapeHtml(field.aliases[0])}"
    >
      <strong>${escapeHtml(field.label)}</strong>
      <code>${escapeHtml(field.aliases[0])}</code>
    </button>
  `).join("");
}

function renderInitialState() {
  appState.downloads = null;
  appState.lastResult = null;
  appState.downloads = null;
  dom.downloadActions.classList.add("hidden");
  setStatus(t("status_no_file"), "neutral");
  dom.summaryRows.textContent = "0";
  dom.summaryFlights.textContent = "0";
  dom.summaryPilots.textContent = "0";
  dom.summaryAircrafts.textContent = "0";
  dom.summaryErrors.textContent = "0";
  dom.summaryWarnings.textContent = "0";
  renderExpectedFieldsPalette();
  renderHeaderEditor(buildHeaderDescriptors([]));
  renderEditorInsights(null, null, []);
  dom.previewFlights.textContent = "[]";
  dom.previewPilots.textContent = "[]";
  dom.previewAircrafts.textContent = "[]";
}

function renderResult(result, mapping, headerDescriptors) {
  appState.downloads = result.downloads || null;
  dom.summaryRows.textContent = String(result.rowCount);
  dom.summaryFlights.textContent = String(result.flights.length);
  dom.summaryPilots.textContent = String(result.pilots.length);
  dom.summaryAircrafts.textContent = String(result.aircrafts.length);
  dom.summaryErrors.textContent = String(result.errors.length);
  dom.summaryWarnings.textContent = String(result.warnings.length);

  if (result.errors.length > 0) {
    setStatus(t("status_blocked", {
      fileName: result.fileName || t("loaded_file_fallback"),
      errorCount: result.errors.length
    }), "error");
    dom.downloadActions.classList.add("hidden");
  } else if (result.warnings.length > 0) {
    setStatus(t("status_ready_warnings", {
      warningCount: result.warnings.length
    }), "warning");
    dom.downloadActions.classList.remove("hidden");
  } else {
    setStatus(t("status_ready_success", {
      flightCount: result.flights.length,
      pilotCount: result.pilots.length,
      aircraftCount: result.aircrafts.length
    }), "success");
    dom.downloadActions.classList.remove("hidden");
  }

  renderHeaderEditor(headerDescriptors);
  renderEditorInsights(result, mapping, headerDescriptors);
  renderPreview(dom.previewFlights, result.flights);
  renderPreview(dom.previewPilots, result.pilots);
  renderPreview(dom.previewAircrafts, result.aircrafts);
}

function renderFatal(message) {
  appState.downloads = null;
  appState.lastResult = null;
  dom.downloadActions.classList.add("hidden");
  setStatus(message, "error");
  dom.summaryRows.textContent = "0";
  dom.summaryFlights.textContent = "0";
  dom.summaryPilots.textContent = "0";
  dom.summaryAircrafts.textContent = "0";
  dom.summaryErrors.textContent = "1";
  dom.summaryWarnings.textContent = "0";
  const headerDescriptors = buildHeaderDescriptors(appState.originalHeaders);
  renderHeaderEditor(headerDescriptors);
  renderEditorInsights({ unusedHeaders: [], errors: [message], warnings: [] }, null, headerDescriptors);
  dom.previewFlights.textContent = "[]";
  dom.previewPilots.textContent = "[]";
  dom.previewAircrafts.textContent = "[]";
}

function setStatus(message, tone) {
  dom.statusBanner.textContent = message;
  dom.statusBanner.className = `status-banner ${tone}`;
}

function renderIssues(container, issues, emptyText) {
  if (!issues.length) {
    container.innerHTML = `<li class="placeholder-item">${escapeHtml(emptyText)}</li>`;
    return;
  }

  container.innerHTML = issues.map((issue) => `<li>${escapeHtml(issue)}</li>`).join("");
}

function renderMissingRequiredFields(mapping) {
  const missingRequiredFields = mapping
    ? FIELD_DEFINITIONS.filter((field) => field.required && !mapping.fields[field.key])
    : [];

  if (!missingRequiredFields.length) {
    dom.missingRequiredList.innerHTML = `<li class="placeholder-item">${escapeHtml(t("editor_missing_required_empty"))}</li>`;
    return;
  }

  dom.missingRequiredList.innerHTML = missingRequiredFields.map((field) => `
    <li>
      <strong>${escapeHtml(field.label)}</strong>
      <span class="table-note"><code>${escapeHtml(field.aliases[0])}</code></span>
    </li>
  `).join("");
}

function renderEditorInsights(result, mapping, headerDescriptors) {
  const activeHeaders = headerDescriptors.filter((descriptor) => !descriptor.removed);
  const validatedCount = activeHeaders.filter((descriptor) => Boolean(findMatchingFieldDescriptor(descriptor.effective))).length;
  const unrecognizedCount = result?.unusedHeaders?.length || 0;
  const missingCount = mapping
    ? FIELD_DEFINITIONS.filter((field) => field.required && !mapping.fields[field.key]).length
    : 0;
  const errorCount = result?.errors?.length || 0;
  const warningCount = result?.warnings?.length || 0;

  dom.editorValidatedCount.textContent = String(validatedCount);
  dom.editorUnrecognizedCount.textContent = String(unrecognizedCount);
  dom.editorMissingCount.textContent = String(missingCount);
  dom.editorErrorsCount.textContent = String(errorCount);
  dom.editorWarningsCount.textContent = String(warningCount);

  renderMissingRequiredFields(mapping);
  renderUnusedColumns(result?.unusedHeaders || []);
  renderBlockingErrors(result, mapping);
  renderProblemRowPanel(result, mapping);
  renderIssues(dom.warningList, result?.warnings || [], result ? t("no_warnings") : t("warnings_placeholder"));
}

function renderBlockingErrors(result, mapping) {
  if (!dom.errorList) {
    return;
  }

  const allErrors = result?.errors || [];
  const problematicRows = result?.problematicRows || [];
  const problematicLineNumbers = new Set(problematicRows.map((problematicRow) => problematicRow.lineNumber));
  Object.keys(appState.rowDrafts).forEach((lineNumber) => {
    if (!problematicLineNumbers.has(Number.parseInt(lineNumber, 10))) {
      delete appState.rowDrafts[lineNumber];
    }
  });
  const rowMessages = new Set(problematicRows.flatMap((problematicRow) => problematicRow.messages));
  const globalErrors = allErrors.filter((message) => !rowMessages.has(message));

  if (!globalErrors.length && !problematicRows.length) {
    appState.expandedProblemLine = null;
    dom.errorList.innerHTML = `<li class="placeholder-item">${escapeHtml(result ? t("no_errors") : t("errors_placeholder"))}</li>`;
    return;
  }

  if (appState.expandedProblemLine !== null && !problematicRows.some((row) => row.lineNumber === appState.expandedProblemLine)) {
    appState.expandedProblemLine = null;
  }

  dom.errorList.innerHTML = `
    ${globalErrors.map((issue) => `<li>${escapeHtml(issue)}</li>`).join("")}
    ${problematicRows.map((problematicRow) => renderProblematicRowError(problematicRow, mapping)).join("")}
  `;
}

function resolveProblematicRowFieldKeys(problematicRow, mapping) {
  const prioritizedKeys = [
    ...problematicRow.fieldKeys,
    ...FIELD_DEFINITIONS.filter((field) => mapping.fields[field.key]).map((field) => field.key)
  ];

  const uniqueKeys = [];
  prioritizedKeys.forEach((fieldKey) => {
    if (!fieldKey || uniqueKeys.includes(fieldKey)) {
      return;
    }
    const isKnownField = FIELD_DEFINITIONS.some((field) => field.key === fieldKey);
    if (mapping.fields[fieldKey] || problematicRow.fieldKeys.includes(fieldKey) || isKnownField) {
      uniqueKeys.push(fieldKey);
    }
  });

  return uniqueKeys;
}

function renderProblematicRowError(problematicRow, mapping) {
  const expanded = appState.expandedProblemLine === problematicRow.lineNumber;
  const issueCountLabel = t("blocking_errors_row_issues", { count: problematicRow.messages.length });

  return `
    <li
      class="blocking-error-item ${expanded ? "is-expanded" : ""}"
      data-problem-toggle-line="${problematicRow.lineNumber}"
      tabindex="0"
      role="button"
      aria-expanded="${expanded ? "true" : "false"}"
    >
      <div class="blocking-error-toggle">
        <span class="blocking-error-heading">${escapeHtml(t("problematic_row_heading", { lineNumber: problematicRow.lineNumber }))}</span>
        <span class="blocking-error-count">${escapeHtml(issueCountLabel)}</span>
      </div>
      <ul class="blocking-error-messages">
        ${problematicRow.messages.map((message) => `<li>${escapeHtml(message)}</li>`).join("")}
      </ul>
    </li>
  `;
}

function renderProblemRowPanel(result, mapping) {
  if (!dom.problemRowPanel || !dom.problemRowPanelBackdrop) {
    return;
  }

  const problematicRow = result?.problematicRows?.find((row) => row.lineNumber === appState.expandedProblemLine);
  if (!problematicRow || !mapping) {
    dom.problemRowPanel.classList.add("hidden");
    dom.problemRowPanelBackdrop.classList.add("hidden");
    dom.problemRowPanel.setAttribute("aria-hidden", "true");
    dom.problemRowPanel.innerHTML = "";
    return;
  }

  const editableFieldKeys = resolveProblematicRowFieldKeys(problematicRow, mapping);
  const fieldsMarkup = editableFieldKeys.length
    ? editableFieldKeys.map((fieldKey) => {
      const fieldDefinition = FIELD_DEFINITIONS.find((field) => field.key === fieldKey);
      const label = fieldDefinition ? fieldDefinition.label : fieldKey;
      const isRequired = Boolean(fieldDefinition?.required);
      const isProblematic = problematicRow.fieldKeys.includes(fieldKey);
      const value = getProblemRowDraftValue(problematicRow, mapping, fieldKey);
      return `
        <label class="problematic-row-field ${isProblematic ? "is-problematic" : ""}">
          <span class="problematic-row-field-label">
            ${escapeHtml(label)}
            ${isRequired ? '<strong class="problematic-row-required">*</strong>' : ""}
          </span>
          <input
            type="text"
            value="${escapeHtml(value)}"
            data-problem-row-input="1"
            data-line-number="${problematicRow.lineNumber}"
            data-field-key="${escapeHtml(fieldKey)}"
          >
        </label>
      `;
    }).join("")
    : `<p class="placeholder-item">${escapeHtml(t("problematic_row_no_fields"))}</p>`;

  dom.problemRowPanel.innerHTML = `
    <div class="problem-row-panel-shell">
      <div class="problem-row-panel-header">
        <div>
          <h3>${escapeHtml(t("problematic_row_heading", { lineNumber: problematicRow.lineNumber }))}</h3>
          <p class="blocking-error-hint">${escapeHtml(t("problematic_row_hint"))}</p>
        </div>
        <button
          class="secondary-button table-button"
          type="button"
          data-problem-action="close"
          data-line-number="${problematicRow.lineNumber}"
          aria-label="${escapeHtml(t("problematic_row_close"))}"
        >${escapeHtml(t("problematic_row_close"))}</button>
      </div>
      <ul class="blocking-error-messages panel-problem-messages">
        ${problematicRow.messages.map((message) => `<li>${escapeHtml(message)}</li>`).join("")}
      </ul>
      <div class="problematic-row-fields panel-problem-fields">
        ${fieldsMarkup}
      </div>
      <div class="problematic-row-actions">
        <button
          class="primary-button table-button"
          type="button"
          data-problem-action="save"
          data-line-number="${problematicRow.lineNumber}"
        >${escapeHtml(t("problematic_row_save"))}</button>
        <button
          class="secondary-button table-button problem-delete-button"
          type="button"
          data-problem-action="delete"
          data-line-number="${problematicRow.lineNumber}"
        >${escapeHtml(t("problematic_row_delete"))}</button>
      </div>
    </div>
  `;

  dom.problemRowPanel.classList.remove("hidden");
  dom.problemRowPanelBackdrop.classList.remove("hidden");
  dom.problemRowPanel.setAttribute("aria-hidden", "false");
}

function getProblemRowDraftValue(problematicRow, mapping, fieldKey) {
  const lineDraft = appState.rowDrafts[problematicRow.lineNumber];
  if (lineDraft && Object.hasOwn(lineDraft, fieldKey)) {
    return lineDraft[fieldKey];
  }
  return String(getValue(problematicRow.rowData, mapping, fieldKey) || "");
}

function getBaseRowValue(row, mapping, fieldKey) {
  const header = mapping.fields[fieldKey];
  return header ? String(row[header] ?? "") : "";
}

function renderHeaderEditor(headerDescriptors) {
  if (!dom.headerOverridesBody) {
    return;
  }

  renderExpectedFieldsPalette();

  if (!headerDescriptors.length) {
    dom.headerOverridesBody.innerHTML = `<tr><td colspan="4" class="placeholder-cell">${escapeHtml(t("header_overrides_placeholder_file"))}</td></tr>`;
    if (dom.resetHeaderOverrides) {
      dom.resetHeaderOverrides.disabled = true;
    }
    return;
  }

  if (dom.resetHeaderOverrides) {
    const hasEdits = Object.keys(appState.headerEdits).length > 0 || appState.addedHeaders.length > 0;
    dom.resetHeaderOverrides.disabled = !hasEdits;
  }

  dom.headerOverridesBody.innerHTML = headerDescriptors.map((descriptor) => {
    const matchedField = findMatchingFieldDescriptor(descriptor.effective);
    const originalLabel = descriptor.original || t("untitled_header", { index: (descriptor.sourceIndex ?? 0) + 1 });
    const needsDefaultValueHint = descriptor.isAdded && matchedField?.required && !textOrNull(descriptor.defaultValue);
    const statusClass = descriptor.removed
      ? "optional"
      : (matchedField ? (matchedField.required ? "ok" : "optional") : "review");
    const statusText = descriptor.removed
      ? t("header_status_removed")
      : (matchedField ? (matchedField.required ? t("header_status_validated") : t("header_status_optional")) : t("header_status_unrecognized"));
    const matchLabel = descriptor.removed
      ? t("header_removed")
      : (matchedField ? matchedField.label : t("header_match_none"));
    const rowClass = descriptor.removed
      ? "header-row-removed"
      : (matchedField ? (matchedField.required ? "header-row-matched-required" : "header-row-matched-optional") : "header-row-unmatched");
    const sourceLabel = descriptor.isAdded
      ? `<span class="status-chip optional">${escapeHtml(t("header_manual_column"))}</span>`
      : (descriptor.isDerived
        ? `<div class="header-source-stack"><span class="status-chip optional">${escapeHtml(t("header_derived_column"))}</span><code>${escapeHtml(originalLabel)}</code></div>`
        : `<code>${escapeHtml(originalLabel)}</code>`);
    const actionLabel = descriptor.isAdded
      ? t("header_delete")
      : (descriptor.removed ? t("header_restore") : t("header_remove"));
    const actionType = descriptor.isAdded
      ? "delete"
      : (descriptor.removed ? "restore" : "remove");
    const sourceNote = descriptor.isDerived
      ? `${[
        `<span class="table-note">${escapeHtml(t("header_derived_from", { original: originalLabel }))}</span>`,
        descriptor.sampleValue ? `<span class="table-note">${escapeHtml(t("header_derived_sample", { value: descriptor.sampleValue }))}</span>` : ""
      ].filter(Boolean).join("")}`
      : ((!descriptor.removed && !descriptor.isAdded && descriptor.original !== descriptor.effective)
        ? `<span class="table-note">${escapeHtml(t("header_renamed_from", { original: originalLabel }))}</span>`
        : "");
    const autoSplitNote = (!descriptor.isAdded && !descriptor.isDerived && descriptor.autoSplitTarget)
      ? `${[
        `<span class="table-note">${escapeHtml(t("header_auto_split_time", { header: descriptor.autoSplitTarget }))}</span>`,
        descriptor.autoSplitSample ? `<span class="table-note">${escapeHtml(t("header_derived_sample", { value: descriptor.autoSplitSample }))}</span>` : ""
      ].filter(Boolean).join("")}`
      : "";
    const defaultValueMarkup = descriptor.isAdded ? `
      <label class="default-value-group">
        <span class="table-note">${escapeHtml(t("header_default_value_label"))}</span>
        <input
          class="override-input default-value-input"
          type="text"
          value="${escapeHtml(descriptor.defaultValue || "")}"
          placeholder="${escapeHtml(t("header_default_value_placeholder"))}"
          data-header-default-input="1"
          data-added-header-id="${escapeHtml(descriptor.addedId)}"
        >
      </label>
    ` : "";
    const defaultValueHint = needsDefaultValueHint
      ? `<span class="table-note table-note-warning">${escapeHtml(t("header_default_value_missing"))}</span>`
      : "";

    return `
      <tr class="${rowClass}">
        <td>${sourceLabel}</td>
        <td>
          <div
            class="header-dropzone"
            data-header-dropzone="1"
            data-row-type="${descriptor.isAdded ? "added" : (descriptor.isDerived ? "derived" : "original")}"
            ${descriptor.originalId ? `data-original-header-id="${escapeHtml(descriptor.originalId)}"` : ""}
            ${descriptor.original !== null && descriptor.original !== undefined ? `data-original-header-value="${escapeHtml(descriptor.original)}"` : ""}
            ${descriptor.addedId ? `data-added-header-id="${escapeHtml(descriptor.addedId)}"` : ""}
            ${descriptor.derivedId ? `data-derived-header-id="${escapeHtml(descriptor.derivedId)}"` : ""}
          >
            <input
              class="override-input"
              type="text"
              value="${escapeHtml(descriptor.effective)}"
              data-header-input="1"
              data-row-type="${descriptor.isAdded ? "added" : (descriptor.isDerived ? "derived" : "original")}"
              ${descriptor.originalId ? `data-original-header-id="${escapeHtml(descriptor.originalId)}"` : ""}
              ${descriptor.original !== null && descriptor.original !== undefined ? `data-original-header-value="${escapeHtml(descriptor.original)}"` : ""}
              ${descriptor.addedId ? `data-added-header-id="${escapeHtml(descriptor.addedId)}"` : ""}
              ${descriptor.derivedId ? `data-derived-header-id="${escapeHtml(descriptor.derivedId)}"` : ""}
              ${descriptor.removed ? "disabled" : ""}
            >
            ${defaultValueMarkup}
          </div>
        </td>
        <td>
          <button
            class="secondary-button table-button"
            type="button"
            data-header-action="${actionType}"
            ${descriptor.originalId ? `data-original-header-id="${escapeHtml(descriptor.originalId)}"` : ""}
            ${descriptor.addedId ? `data-added-header-id="${escapeHtml(descriptor.addedId)}"` : ""}
            ${descriptor.derivedId ? `data-derived-header-id="${escapeHtml(descriptor.derivedId)}"` : ""}
          >${escapeHtml(actionLabel)}</button>
        </td>
        <td>
          <div class="header-detected-cell">
            <span class="status-chip ${statusClass}">${escapeHtml(statusText)}</span>
            <strong class="header-detected-label">${escapeHtml(matchLabel)}</strong>
            ${sourceNote}
            ${autoSplitNote}
            ${defaultValueHint}
          </div>
        </td>
      </tr>
    `;
  }).join("");
}

function renderMappingTable(mapping) {
  const rows = FIELD_DEFINITIONS.map((field) => {
    const detected = mapping.fields[field.key];
    const source = mapping.sources[field.key];
    const sourceLabel = source ? (source.original || t("untitled_header", { index: (source.sourceIndex ?? 0) + 1 })) : "";
    const statusClass = detected ? "ok" : (field.required ? "missing" : "optional");
    const statusLabel = detected ? t("status_detected") : (field.required ? t("status_missing") : t("status_optional"));
    const sourceNote = detected && source && sourceLabel !== detected
      ? `<span class="table-note">${escapeHtml(t("header_renamed_from", { original: sourceLabel }))}</span>`
      : "";
    return `
      <tr>
        <td>${escapeHtml(field.label)}</td>
        <td>${detected ? `<code>${escapeHtml(detected)}</code>${sourceNote}` : `<span class="placeholder-cell">${escapeHtml(t("mapping_not_detected"))}</span>`}</td>
        <td><span class="status-chip ${statusClass}">${escapeHtml(statusLabel)}</span></td>
      </tr>
    `;
  }).join("");

  dom.mappingTableBody.innerHTML = rows || `<tr><td colspan="3" class="placeholder-cell">${escapeHtml(t("mapping_no_data"))}</td></tr>`;
}

function renderUnusedColumns(unusedHeaders) {
  if (!unusedHeaders.length) {
    dom.unusedColumns.innerHTML = `<span class="placeholder-pill">${escapeHtml(t("unused_all_recognized"))}</span>`;
    return;
  }

  dom.unusedColumns.innerHTML = unusedHeaders
    .map((header) => {
      const originalLabel = header.original || t("untitled_header", { index: (header.sourceIndex ?? 0) + 1 });
      if (header.isAdded) {
        return `<span class="pill review"><code>${escapeHtml(header.effective)}</code> • ${escapeHtml(t("header_manual_column"))}</span>`;
      }
      if (header.original !== header.effective) {
        return `<span class="pill review"><code>${escapeHtml(originalLabel)}</code> → <code>${escapeHtml(header.effective)}</code></span>`;
      }
      return `<span class="pill review"><code>${escapeHtml(originalLabel)}</code></span>`;
    })
    .join("");
}

function renderPreview(container, data) {
  const preview = data.length > 0 ? [data[0]] : [];
  container.textContent = JSON.stringify(preview, null, 2);
}

function downloadJson(fileName) {
  if (!appState.downloads || !appState.downloads[fileName]) {
    return;
  }

  const content = JSON.stringify(appState.downloads[fileName], null, 2);
  const blob = new Blob([content], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = fileName;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

function downloadCsvTemplate() {
  const csvContent = buildTemplateCsv();
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "aerolog-import-template.csv";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

async function downloadXlsxTemplate() {
  try {
    const response = await fetch("./assets/aerolog-import-template.xlsx");
    if (!response.ok) {
      throw new Error(t("xlsx_parse_error"));
    }

    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "aerolog-import-template.xlsx";
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
  } catch {
    renderFatal(t("xlsx_parse_error"));
  }
}

function buildTemplateCsv() {
  const templateRow = [
    "2026-06-14",
    "09:15",
    "11:05",
    "F-GABC",
    "Cessna",
    "172S",
    "LFPN",
    "LFPZ",
    "01:50",
    "Tom",
    "Martin",
    "Julie",
    "Dupont",
    "TR123",
    t("template_sample_remark")
  ];

  const templateHeaders = TEMPLATE_HEADERS.map((header) => (
    TEMPLATE_REQUIRED_HEADERS.has(header) ? `*${header}` : header
  ));

  return `${templateHeaders.join(",")}\n${templateRow.join(",")}\n`;
}

function populateLanguageSelect() {
  dom.languageSelect.innerHTML = LANGUAGE_OPTIONS
    .map((language) => `<option value="${escapeHtml(language.code)}">${escapeHtml(language.label)}</option>`)
    .join("");
}

function resolveInitialLanguage() {
  const storedLanguage = safeStorageGet(STORAGE_KEY);
  if (storedLanguage) {
    return resolveSupportedLanguage(storedLanguage);
  }

  const browserLanguages = [...(navigator.languages || []), navigator.language].filter(Boolean);
  for (const candidate of browserLanguages) {
    const resolved = resolveSupportedLanguage(candidate);
    if (resolved) {
      return resolved;
    }
  }

  return "en";
}

function resolveSupportedLanguage(value) {
  const normalized = String(value || "").trim().toLowerCase();
  if (!normalized) {
    return "en";
  }

  if (normalized.startsWith("zh")) {
    return "zh";
  }

  const baseCode = normalized.split("-")[0];
  return LANGUAGE_OPTIONS.some((option) => option.code === baseCode) ? baseCode : "en";
}

function setLanguage(languageCode, { rerender = true } = {}) {
  appState.language = resolveSupportedLanguage(languageCode);
  dom.languageSelect.value = appState.language;
  document.documentElement.lang = appState.language;
  document.documentElement.dir = RTL_LANGUAGES.has(appState.language) ? "rtl" : "ltr";
  safeStorageSet(STORAGE_KEY, appState.language);
  applyTranslations();

  if (rerender) {
    if (appState.csvText) {
      runConversion(appState.csvText);
    } else {
      renderInitialState();
    }
  }
}

function applyTranslations() {
  document.title = t("page_title_file");

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    element.innerHTML = t(element.dataset.i18nHtml);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder));
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAria));
  });

  document.querySelectorAll("option[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  renderVersionBadge();
}

function renderVersionBadge() {
  if (!dom.appVersion) {
    return;
  }

  dom.appVersion.textContent = `${t("version_label")} ${APP_VERSION}`;
}

function getRoleLabel(role) {
  return t(`role_${role}`);
}

function getPilotFieldLabel(fieldName) {
  return t(PILOT_FIELD_LABEL_KEYS[fieldName] || fieldName);
}

function getAircraftFieldLabel(fieldName) {
  return t(AIRCRAFT_FIELD_LABEL_KEYS[fieldName] || fieldName);
}

function t(key, vars = {}) {
  const languagePack = TRANSLATIONS[appState.language] || TRANSLATIONS.en;
  const rawValue = languagePack[key] ?? TRANSLATIONS.en[key] ?? key;

  return String(rawValue).replace(/\{(\w+)\}/g, (match, variableName) => {
    return vars[variableName] !== undefined ? String(vars[variableName]) : match;
  });
}

function safeStorageGet(key) {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeStorageSet(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    return null;
  }
  return null;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
