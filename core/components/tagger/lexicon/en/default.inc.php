<?php
/**
 * Default English Lexicon Entries for Tagger
 *
 * @package tagger
 * @subpackage lexicon
 */

$_lang['tagger'] = 'Tagger';

$_lang['tagger.global.search'] = 'Search';
$_lang['tagger.global.loading'] = 'Loading';
$_lang['tagger.global.change_order'] = 'Change order of: [[+name]]';

$_lang['tagger.menu.tagger'] = 'Tagger';
$_lang['tagger.menu.tagger_desc'] = 'Manage your groups and tags';

$_lang['tagger.field.tagfield'] = 'Tag field';
$_lang['tagger.field.combobox'] = 'Combo box';

$_lang['tagger.group.groups'] = 'Groups';
$_lang['tagger.group.intro_msg'] = 'In this section you can manage Groups. Each group will later contain tags.';
$_lang['tagger.group.name'] = 'Name';
$_lang['tagger.group.field_type'] = 'Field type';
$_lang['tagger.group.remove_unused'] = 'Remove unused tags';
$_lang['tagger.group.allow_new'] = 'Allow new tags from field';
$_lang['tagger.group.allow_blank'] = 'Allow blank';
$_lang['tagger.group.allow_type'] = 'Allow type';
$_lang['tagger.group.show_autotag'] = 'Show autotag';
$_lang['tagger.group.show_for_templates'] = 'Show for Templates';
$_lang['tagger.group.position'] = 'Position';
$_lang['tagger.group.all'] = 'All groups';
$_lang['tagger.group.create'] = 'Create a new Group';
$_lang['tagger.group.update'] = 'Update Group';
$_lang['tagger.group.remove'] = 'Remove Group';
$_lang['tagger.group.remove_confirm'] = 'Are you sure, you want to remove this Group? All tags in this group will be also removed.';
$_lang['tagger.group.import'] = 'Import';
$_lang['tagger.group.auto_import'] = 'Automatic import';
$_lang['tagger.group.import_from'] = 'Import from TV';
$_lang['tagger.group.import_to'] = 'Import to Group';
$_lang['tagger.group.place'] = 'Place';
$_lang['tagger.group.place_in_tab'] = 'In tab';
$_lang['tagger.group.place_above_content'] = 'Above content';
$_lang['tagger.group.place_below_content'] = 'Below content';
$_lang['tagger.group.place_bottom_page'] = 'Bottom page';

$_lang['tagger.tag.tags'] = 'Tags';
$_lang['tagger.tag.intro_msg'] = 'In this section you can manage Tags.';
$_lang['tagger.tag.name'] = 'Name';
$_lang['tagger.tag.group'] = 'Group';
$_lang['tagger.tag.create'] = 'Create a new Tag';
$_lang['tagger.tag.update'] = 'Update Tag';
$_lang['tagger.tag.remove'] = 'Remove Tag';
$_lang['tagger.tag.remove_confirm'] = 'Are you sure, you want to remove this Tag?';

$_lang['setting_tagger.tag_key'] = 'Tag key';
$_lang['setting_tagger.tag_key_desc'] = 'Name of GET variable that stores tags. Default: tags';
$_lang['setting_tagger.place_above_content_header'] = 'Above content header';
$_lang['setting_tagger.place_above_content_header_desc'] = 'Show or hide header of the Tagger block, that shows above the content block.';
$_lang['setting_tagger.place_below_content_header'] = 'Below content header';
$_lang['setting_tagger.place_below_content_header_desc'] = 'Show or hide header of the Tagger block, that shows below the content block.';
$_lang['setting_tagger.place_bottom_page_header'] = 'Bottom page header';
$_lang['setting_tagger.place_bottom_page_header_desc'] = 'Show or hide header of the Tagger block, that shows at the bottom of the page.';

$_lang['area_places'] = 'Places';
$_lang['area_default'] = 'Default';

$_lang['tagger.err.group_name_ns'] = 'Group name is not specified. Please fill Group name.';
$_lang['tagger.err.group_name_ae'] = 'Group with this name already exists. Please choose a different name.';
$_lang['tagger.err.tag_name_ns'] = 'Tag name is not specified. Please fill Tag name.';
$_lang['tagger.err.tag_name_ae'] = 'Tag with this name already exists in given group. Please choose a different name or group.';
$_lang['tagger.err.tag_group_changed'] = 'Tag group can not be changed.';
$_lang['tagger.err.bad_sort_column'] = 'Sort grid by <strong>[[+column]]</strong> to use drag & drop sorting.';
$_lang['tagger.err.clear_filter'] = 'Please clear <strong>search</strong> to use drag & drop sorting.';
$_lang['tagger.err.import_group_ns'] = 'Group is not specified. Please select a Group.';
$_lang['tagger.err.import_tv_ns'] = 'Template Variable is not specified. Please select a TV.';
$_lang['tagger.err.import_tv_ne'] = 'Template Variable was not found. Please try to repeat your action.';
$_lang['tagger.err.import_tv_nsp'] = 'Type of selected Template Variable is not supported. Supported types are: [[+supported]]';