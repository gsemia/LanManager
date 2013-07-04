<h1>Spells</h1>

<div class="knockout" data-ko="SpellIndex">
	
	
	<p>
		<button class="btn" data-bind="click: toggleSearch, text: searchVisible() ? 'Hide Search Fields' : 'Show Search Fields'"></button>
	</p>
	
	<div>
		<table data-bind="visible: searchVisible" style="display: none; margin-bottom: 2em;">
			<tr>
				<th class="text-left">Name</th>
				<td><input data-bind="value: name" /></td>
			</tr>
			<tr>
				<th class="text-left">School</th>
				<td><input data-bind="value: school" /></td>
			</tr>
			<tr>
				<th class="text-left">Subschool</th>
				<td><input data-bind="value: subschool" /></td>
			</tr>
			<tr>
				<th class="text-left">Type</th>
				<td><input data-bind="value: type" /></td>
			</tr>
			<tr>
				<th class="text-left">Casting Time</th>
				<td><input data-bind="value: castingTime" /></td>
			</tr>
			<tr>
				<th class="text-left">Range</th>
				<td><input data-bind="value: range" /></td>
			</tr>
			<tr>
				<th class="text-left">Target</th>
				<td><input data-bind="value: target" /></td>
			</tr>
			<tr>
				<th class="text-left">Effect</th>
				<td><input data-bind="value: effect" /></td>
			</tr>
			<tr>
				<th class="text-left">Duration</th>
				<td><input data-bind="value: duration" /></td>
			</tr>
			<tr>
				<th class="text-left">Saving Throw</th>
				<td><input data-bind="value: savingThrow" /></td>
			</tr>
			<tr>
				<th class="text-left">Spell Resistance</th>
				<td><input data-bind="value: spellResistance" /></td>
			</tr>
			<tr>
				<th class="text-left">Class</th>
				<td><input data-bind="value: clazz" /></td>
			</tr>
			<tr>
				<th class="text-left">Level</th>
				<td><input data-bind="value: level" /></td>
			</tr>
			<tr>
				<th class="text-left">Component</th>
				<td><input data-bind="value: component" /></td>
			</tr>
			<tr>
				<th class="text-left">Component Detail</th>
				<td><input data-bind="value: componentDetail" /></td>
			</tr>
		</table>
	</div>
	
	<h3 data-bind="text: spells().length + ' Spells'"></h3>
	<p data-bind="visible: loading" style="display: none;"><img src="<?php echo Yii::app()->baseUrl . '/images/loading.gif'; ?>" /></p>
	
	<div>
		<table class="table table-condensed table-hover">
			<thead>
				<tr>
					<th>Spell</th>
					<th>School</th>
					<th>Subschool</th>
				</tr>
			</thead>
			<tbody data-bind="foreach: spells">
				<tr>
					<td data-bind="text: name"></td>
					<td data-bind="text: school"></td>
					<td data-bind="text: subschool"></td>
				</tr>    
			</tbody>
		</table>
	</div>
</div>